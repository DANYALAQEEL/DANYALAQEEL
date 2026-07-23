"use client";
import AppShell from "@/components/Shell/AppShell";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
