"use client";

/**
 * SignUp Page — Re-skinned per Section 7 of Build Specification.
 *
 * Implements a centered glass card over a subtle dark gradient background,
 * styled with the "cc-*" color tokens. Forms look visually complete
 * but handle stub auth appropriately.
 */

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Shield, Lock, User, AlertCircle, Mail } from "lucide-react";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !username.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      // POSTs to /api/auth/sign-up which now creates a real user.
      const response = await axios.post("/api/auth/sign-up", {
        name: name.trim(),
        username: username.trim(),
        password: password.trim(),
        role: "admin",
      });

      if (response.data.status) {
        setSuccess("Account created successfully! Redirecting to sign in...");
        setTimeout(() => {
          router.push("/auth/signin");
        }, 2000);
      } else {
        setError(response.data.msg || "Registration failed.");
      }
    } catch (err: any) {
      console.error("Sign-up error:", err);
      // Show the server-provided reason (e.g. username taken).
      setError(
        err.response?.data?.msg ||
          "Registration failed. Ensure backend is running and supports signup."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-cc-bg-base px-4 py-12">
      {/* Premium dark gradient decorative background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-cc-accent-teal/5 blur-[120px]" />
        <div className="absolute -right-1/4 -bottom-1/4 h-[800px] w-[800px] rounded-full bg-cc-accent-gold/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Main Glassmorphic Card */}
        <div className="cc-glass-card p-8 shadow-2xl">
          {/* Header & Logo */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cc-accent-teal/10">
              <Shield size={28} className="text-cc-accent-teal" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-cc-text-primary">
              Create Admin Account
            </h1>
            <p className="mt-2 text-xs text-cc-text-secondary">
              Register a new security administrator account
            </p>
          </div>

          {error && (
            <div className="mb-6 flex items-center gap-2 rounded-md border border-cc-status-critical/30 bg-cc-status-critical/10 p-3.5 text-xs text-cc-status-critical">
              <AlertCircle size={14} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-6 flex items-center gap-2 rounded-md border border-cc-status-active/30 bg-cc-status-active/10 p-3.5 text-xs text-cc-status-active">
              <AlertCircle size={14} className="shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cc-text-secondary">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-cc-text-muted">
                  <User size={16} />
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-elevated py-2.5 pl-10 pr-4 text-sm text-cc-text-primary placeholder:text-cc-text-muted focus:border-cc-accent-teal focus:outline-none focus:ring-1 focus:ring-cc-accent-teal"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cc-text-secondary">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-cc-text-muted">
                  <User size={16} />
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Choose username"
                  className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-elevated py-2.5 pl-10 pr-4 text-sm text-cc-text-primary placeholder:text-cc-text-muted focus:border-cc-accent-teal focus:outline-none focus:ring-1 focus:ring-cc-accent-teal"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cc-text-secondary">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-cc-text-muted">
                  <Lock size={16} />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create password"
                  className="w-full rounded-md border border-cc-border-subtle bg-cc-bg-elevated py-2.5 pl-10 pr-4 text-sm text-cc-text-primary placeholder:text-cc-text-muted focus:border-cc-accent-teal focus:outline-none focus:ring-1 focus:ring-cc-accent-teal"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 flex w-full items-center justify-center rounded-md bg-cc-accent-teal py-3 text-sm font-semibold text-cc-bg-base transition-all hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Footer links */}
          <div className="mt-8 text-center text-xs text-cc-text-secondary">
            <span>Already have an account? </span>
            <Link
              href="/auth/signin"
              className="font-medium text-cc-accent-teal hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
