"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Guest {
  guest_id: number;
  cnic_id: string;
  added_at: string;
  cnic: {
    name: string;
    cnic: string;
    cnic_img_path: string;
    name_confidence: number;
    all_details: string;
  };
}

const VIPRegistration: React.FC = () => {
  const [cnic, setCnic] = useState("");
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<Guest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [csvImporting, setCsvImporting] = useState(false);

  const fetchGuests = async () => {
    try {
      const response = await axios.get(
        "/api/id-card-camera/get-registered-guests",
      );
      const guestsData = Array.isArray(response.data.data)
        ? response.data.data
        : [];
      // Sort by added_at in descending order (newest first)
      const sortedGuests = guestsData.sort(
        (a: Guest, b: Guest) =>
          new Date(b.added_at).getTime() - new Date(a.added_at).getTime(),
      );
      setGuests(sortedGuests);
    } catch (error) {
      console.error("Error fetching Guests:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cnic.trim()) {
      setMessage("CNIC is required");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      await axios.post("/api/id-card-camera/register-guest", {
        name,
        cnic_id: cnic,
      });
      setMessage("Guest registered successfully");
      setCnic("");
      fetchGuests(); // Refresh the list
    } catch (error) {
      console.error("Error registering Guest:", error);
      setMessage("Error registering Guest");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemove = async (guest: Guest) => {
    if (!confirm("Are you sure you want to remove this Guest?")) return;

    try {
      await axios.delete("/api/id-card-camera/remove-guest", {
        data: {
          cnic_id: guest.cnic_id,
          name:
            guests.find((g) => g.cnic_id === guest.cnic_id)?.cnic.name || "",
        },
      });
      setMessage("Guest removed successfully");
      fetchGuests();
    } catch (error) {
      console.error("Error removing Guest:", error);
      setMessage("Error removing Guest");
    }
  };

  const handleCsvImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCsvImporting(true);
    setMessage("");

    try {
      const text = await file.text();
      const lines = text.split("\n").filter((line) => line.trim());

      // Parse CSV data, skip header row
      const guestData = [];
      for (let i = 1; i < lines.length; i++) {
        const [name, cnic] = lines[i].split(",").map((s) => s.trim());
        if (name && cnic) {
          guestData.push({ name, cnic_id: cnic });
        }
      }

      if (guestData.length === 0) {
        setMessage("No valid data found in CSV");
        return;
      }

      // Send batch request
      const response = await axios.post(
        "/api/id-card-camera/register-guests-batch",
        guestData,
      );
      setMessage(response.data.message);
      fetchGuests();
    } catch (error) {
      console.error("Error importing CSV:", error);
      setMessage("Error importing CSV");
    } finally {
      setCsvImporting(false);
      e.target.value = "";
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Guest Registration
        </h3>
      </div>

      <div className="p-6.5">
        <div className="mb-6">
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Name <span className="text-meta-1">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                const val = e.target.value;
                // Allow only letters and spaces
                if (/^[a-zA-Z\s]*$/.test(val)) {
                  setName(val);
                }
              }}
              placeholder="Enter Name"
              maxLength={50}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              disabled={isSubmitting || csvImporting}
            />
            <label className="mb-2.5 block text-black dark:text-white">
              CNIC <span className="text-meta-1">*</span>
            </label>
            <input
              type="text"
              value={cnic}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // only digits

                if (value.length > 5 && value.length <= 12) {
                  // First dash after 5 digits
                  value = `${value.slice(0, 5)}-${value.slice(5)}`;
                } else if (value.length > 12) {
                  // Two dashes after 5 + 7 digits
                  value = `${value.slice(0, 5)}-${value.slice(5, 12)}-${value.slice(12, 13)}`;
                }

                setCnic(value);
              }}
              placeholder="Enter CNIC (XXXXX-XXXXXXX-X)"
              maxLength={15} // 13 digits + 2 dashes
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              disabled={isSubmitting}
            />
            <label className="mb-2.5 block text-black dark:text-white">
              Import from CSV (Column names should be name, cnic)
            </label>
            <input
              type="file"
              accept=".csv"
              onChange={handleCsvImport}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              disabled={csvImporting}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Registering..." : "Register Guest"}
          </button>

          {message && (
            <div
              className={`mt-4 rounded p-3 ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
            >
              {message}
            </div>
          )}
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h4 className="font-medium text-black dark:text-white">
              Registered Guests
            </h4>
          </div>

          <div className="p-6.5">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-2 text-left dark:bg-meta-4">
                      <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                        Name
                      </th>
                      <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                        CNIC
                      </th>
                      <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                        Added At
                      </th>
                      <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.length > 0 ? (
                      guests.map((guest, index) => (
                        <tr key={index}>
                          <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                            <h5 className="font-medium text-black dark:text-white">
                              {guest.cnic.name}
                            </h5>
                          </td>
                          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                            <p className="text-black dark:text-white">
                              {guest.cnic_id}
                            </p>
                          </td>
                          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                            {new Date(guest.added_at).toLocaleString()}
                          </td>
                          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                            <button
                              onClick={() => handleRemove(guest)}
                              className="bg-red-500 hover:bg-red-600 rounded px-3 py-1 text-sm text-white"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={3}
                          className="border-b border-[#eee] px-4 py-5 text-center dark:border-strokedark"
                        >
                          <p className="text-black dark:text-white">
                            No Guests registered yet
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPRegistration;
