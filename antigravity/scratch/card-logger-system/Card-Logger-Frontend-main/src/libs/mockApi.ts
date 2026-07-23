/**
 * mockApi.ts
 *
 * Implements client-side mocking for the "Demo Mode" of the Next.js portal.
 * This intercepts all outgoing axios requests when demoMode is active and
 * returns realistic, high-fidelity mock data mimicking the Pakistani university integration.
 */

import type {
  TotalIdCardsToday,
  TotalCnicCount,
  TotalTimestampsStats,
  RepeatVisitors,
  IdCardsStatsChart,
  CnicDetection,
  Camera,
  CameraLocation,
  PlateDetection,
  ApiEnvelope
} from "../types/api-types";

// ---------------------------------------------------------------------------
// Mock Personas and Vehicles
// ---------------------------------------------------------------------------
export interface MockPersona {
  cnic: string;
  name: string;
  role: string;
  isVip: boolean;
  avatar: string;
  rawOcr: string;
}

export interface MockVehicle {
  plate: string;
  model: string;
  avatar: string;
}

export const MOCK_PERSONAS: MockPersona[] = [
  {
    cnic: "37405-4819205-3",
    name: "Ahmed Hassan",
    role: "Dean of Computer Science (VIP)",
    isVip: true,
    avatar: "/images/demo/cnic_card_1.png",
    rawOcr: `PAKISTAN NATIONAL IDENTITY CARD
Name: Ahmed Hassan
Father Name: Mahmood Hassan
Gender: M | Identity Number: 37405-4819205-3
Date of Birth: 12.04.1973
Date of Issue: 18.09.2021 | Date of Expiry: 18.09.2031`
  },
  {
    cnic: "35202-9182746-4",
    name: "Ayesha Bibi",
    role: "Assistant Professor (VIP)",
    isVip: true,
    avatar: "/images/demo/cnic_card_2.png",
    rawOcr: `PAKISTAN NATIONAL IDENTITY CARD
Name: Ayesha Bibi
Husband Name: Muhammad Bilal
Gender: F | Identity Number: 35202-9182746-4
Date of Birth: 05.08.1985
Date of Issue: 22.01.2020 | Date of Expiry: 22.01.2030`
  },
  {
    cnic: "42101-1209384-5",
    name: "Prof. Muhammad Iqbal",
    role: "Professor of Physics",
    isVip: false,
    avatar: "/images/demo/cnic_card_3.png",
    rawOcr: `PAKISTAN NATIONAL IDENTITY CARD
Name: Muhammad Iqbal
Father Name: Javed Iqbal
Gender: M | Identity Number: 42101-1209384-5
Date of Birth: 25.12.1965
Date of Issue: 10.05.2018 | Date of Expiry: 10.05.2028`
  },
  {
    cnic: "34101-7293845-2",
    name: "Zainab Malik",
    role: "PhD Researcher",
    isVip: false,
    avatar: "/images/demo/cnic_card_4.png",
    rawOcr: `PAKISTAN NATIONAL IDENTITY CARD
Name: Zainab Malik
Father Name: Tariq Malik
Gender: F | Identity Number: 34101-7293845-2
Date of Birth: 14.11.1993
Date of Issue: 03.11.2019 | Date of Expiry: 03.11.2029`
  },
  {
    cnic: "33102-5819304-1",
    name: "Ali Raza",
    role: "Lecturer in Mathematics",
    isVip: false,
    avatar: "/images/demo/cnic_card_5.png",
    rawOcr: `PAKISTAN NATIONAL IDENTITY CARD
Name: Ali Raza
Father Name: Asif Raza
Gender: M | Identity Number: 33102-5819304-1
Date of Birth: 30.01.1990
Date of Issue: 12.07.2022 | Date of Expiry: 12.07.2032`
  },
  {
    cnic: "61101-2839485-6",
    name: "Dr. Fatima Alvi",
    role: "Visiting Faculty",
    isVip: false,
    avatar: "/images/demo/cnic_card_6.png",
    rawOcr: `PAKISTAN NATIONAL IDENTITY CARD
Name: Fatima Alvi
Father Name: Rashid Alvi
Gender: F | Identity Number: 61101-2839485-6
Date of Birth: 09.09.1982
Date of Issue: 05.04.2023 | Date of Expiry: 05.04.2033`
  }
];

export const MOCK_VEHICLES: MockVehicle[] = [
  {
    plate: "ISL-2247",
    model: "Toyota Corolla (Silver)",
    avatar: "/images/demo/plate_isl_2247.png"
  },
  {
    plate: "LHR-9988",
    model: "Suzuki Swift (Red)",
    avatar: "/images/demo/plate_le_8356.png"
  },
  {
    plate: "KHI-4512",
    model: "Honda Civic (Black)",
    avatar: "/images/demo/plate_riw_4821.png"
  },
  {
    plate: "PES-3355",
    model: "KIA Sportage (White)",
    avatar: "/images/demo/plate_rwp_7193.png"
  }
];

const MOCK_CAMERAS: Camera[] = [
  {
    id: 1,
    name: "Main Entrance Gate Camera",
    type: "cnic",
    location: "Main Entrance Gate",
    crop: "0,0,640,480",
    cam_url: "0",
    thumbnail_path: null
  },
  {
    id: 2,
    name: "ANPR Lane 1 Camera",
    type: "plate",
    location: "Main Entrance Gate",
    crop: "0,0,640,480",
    cam_url: "1",
    thumbnail_path: null
  },
  {
    id: 3,
    name: "Faculty Parking Gate Camera",
    type: "cnic",
    location: "Faculty Parking Gate",
    crop: "0,0,640,480",
    cam_url: "2",
    thumbnail_path: null
  },
  {
    id: 4,
    name: "Admin Block Entrance Camera",
    type: "cnic",
    location: "Admin Block",
    crop: "0,0,640,480",
    cam_url: "3",
    thumbnail_path: null
  }
];

const MOCK_LOCATIONS: CameraLocation[] = [
  { id: 1, coords: "250,180", description: "Main Entrance Gate" },
  { id: 2, coords: "450,220", description: "Faculty Parking Gate" },
  { id: 3, coords: "650,300", description: "Admin Block" }
];

// ---------------------------------------------------------------------------
// Mock Database State (in-memory)
// ---------------------------------------------------------------------------
class MockDatabase {
  public detections: CnicDetection[] = [];
  public plates: PlateDetection[] = [];
  public totalScansToday = 62;
  public totalUniqueCnics = 18;

  constructor() {
    this.seedHistory();
  }

  private seedHistory() {
    const now = new Date();
    // Seed 40 card detections over the last 24 hours
    for (let i = 40; i >= 1; i--) {
      const ts = new Date(now.getTime() - i * 35 * 60 * 1000); // approx every 35 mins
      const person = MOCK_PERSONAS[i % MOCK_PERSONAS.length];
      this.detections.push({
        id: `${person.cnic}-${ts.getTime()}`, // unique detection id
        name: person.name,
        timestamp: ts.toISOString(),
        imagePath: person.avatar,
        allDetails: person.rawOcr,
        isVip: person.isVip
      });
    }

    // Seed 20 plate hits
    for (let i = 20; i >= 1; i--) {
      const ts = new Date(now.getTime() - i * 65 * 60 * 1000);
      const vehicle = MOCK_VEHICLES[i % MOCK_VEHICLES.length];
      this.plates.push({
        number_plate: vehicle.plate,
        timestamp: ts.toISOString(),
        img_path: vehicle.avatar
      });
    }

    // Sort descending
    this.detections.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    this.plates.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }

  public tick() {
    const now = new Date();
    // 50% chance of CNIC scan, 50% chance of Plate scan
    if (Math.random() > 0.5) {
      const person = MOCK_PERSONAS[Math.floor(Math.random() * MOCK_PERSONAS.length)];
      const newDet: CnicDetection = {
        id: `${person.cnic}-${now.getTime()}`,
        name: person.name,
        timestamp: now.toISOString(),
        imagePath: person.avatar,
        allDetails: person.rawOcr,
        isVip: person.isVip
      };
      this.detections.unshift(newDet);
      this.totalScansToday += 1;
      if (Math.random() > 0.8) {
        this.totalUniqueCnics += 1;
      }
      return { type: "cnic", data: newDet };
    } else {
      const vehicle = MOCK_VEHICLES[Math.floor(Math.random() * MOCK_VEHICLES.length)];
      const newPlate: PlateDetection = {
        number_plate: vehicle.plate,
        timestamp: now.toISOString(),
        img_path: vehicle.avatar
      };
      this.plates.unshift(newPlate);
      return { type: "plate", data: newPlate };
    }
  }

  public getChartStats(range: "daily" | "weekly" | "monthly"): IdCardsStatsChart {
    const daily: Record<string, number> = {};
    const weekly: Record<string, number> = {};
    const monthly: Record<string, number> = {};

    const now = new Date();
    
    // Daily: 24 hourly buckets
    for (let i = 23; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 60 * 60 * 1000);
      const key = date.toISOString().slice(0, 13) + ":00:00"; // YYYY-MM-DD HH:00:00
      daily[key] = Math.floor(Math.random() * 8) + 1;
    }

    // Weekly: 7 daily buckets
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const key = date.toISOString().slice(0, 10);
      weekly[key] = Math.floor(Math.random() * 45) + 15;
    }

    // Monthly: 30 daily buckets
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const key = date.toISOString().slice(0, 10);
      monthly[key] = Math.floor(Math.random() * 45) + 15;
    }

    return {
      daily_stats: daily,
      weekly_stats: weekly,
      monthly_stats: monthly
    };
  }
}

export const db = new MockDatabase();

// ---------------------------------------------------------------------------
// Mock Handler
// ---------------------------------------------------------------------------
export function mockAxiosRequest(method: string, url: string, data?: any): any {
  const cleanUrl = url.split("?")[0];

  // Auth endpoints
  if (cleanUrl === "/api/auth/sign-in") {
    return {
      status: true,
      token: "demo-token",
      msg: "Demo Mode Authentication Success"
    };
  }

  // Camera list
  if (cleanUrl === "/api/camera/all") {
    return {
      status: true,
      data: MOCK_CAMERAS,
      msg: "Success"
    };
  }

  // Camera locations
  if (cleanUrl === "/api/camera/locations") {
    return {
      status: true,
      data: MOCK_LOCATIONS,
      msg: "Success"
    };
  }

  // KPI total ID cards
  if (cleanUrl === "/api/dashboard/total-id-cards") {
    return {
      status: true,
      data: {
        total_cards_for_day: db.totalScansToday,
        cards_day_difference_percentage: 18.5,
        card_difference_direction: "up"
      },
      msg: "Success"
    };
  }

  // KPI unique CNICs count
  if (cleanUrl === "/api/dashboard/total-cnic-count") {
    return {
      status: true,
      data: {
        total_cnics: db.totalUniqueCnics.toString()
      },
      msg: "Success"
    };
  }

  // KPI statistics (week, month)
  if (cleanUrl === "/api/dashboard/total-timestamps-stats") {
    return {
      status: true,
      data: {
        total_timestamps_today: db.totalScansToday,
        total_timestamps_this_week: db.totalScansToday + 248,
        total_timestamps_this_month: db.totalScansToday + 1152
      },
      msg: "Success"
    };
  }

  // Repeat visitors
  if (cleanUrl === "/api/dashboard/repeat-visitors") {
    const repeat: Record<string, number> = {};
    MOCK_PERSONAS.slice(0, 3).forEach((p, idx) => {
      repeat[p.cnic] = idx + 2;
    });
    return {
      status: true,
      data: {
        repeat_visitors: repeat
      },
      msg: "Success"
    };
  }

  // Charts
  if (cleanUrl === "/api/dashboard/id-cards-stats-chart") {
    return {
      status: true,
      data: db.getChartStats("daily"),
      msg: "Success"
    };
  }

  // CNIC detections - cnic-timestamps-all
  if (cleanUrl === "/api/id-card-camera/cnic-timestamps-all") {
    return {
      status: true,
      data: db.detections,
      msg: "Success"
    };
  }

  // Late ANPR - latest plate hit per camera
  if (cleanUrl.startsWith("/api/number-plate/cnic-timestamp-latest/")) {
    const camIdStr = cleanUrl.split("/").pop();
    const camId = parseInt(camIdStr || "1", 10);
    const vehicle = MOCK_VEHICLES[camId % MOCK_VEHICLES.length];
    const matchingPlates = db.plates.filter(p => p.number_plate === vehicle.plate);
    const latest = matchingPlates[0] || db.plates[0];
    return {
      status: true,
      data: latest,
      msg: "Success"
    };
  }

  // VIP list
  if (cleanUrl === "/api/vip/all") {
    return {
      status: true,
      data: MOCK_PERSONAS.filter(p => p.isVip).map(p => ({
        cnic: p.cnic,
        name: p.name,
        cnic_img_path: p.avatar,
        name_confidence: 98.4,
        all_details: p.rawOcr
      })),
      msg: "Success"
    };
  }

  return {
    status: true,
    data: null,
    msg: "Demo Endpoint Stub"
  };
}
