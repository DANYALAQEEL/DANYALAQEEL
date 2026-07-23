// src/app/(routes)/cameras/id-card/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Camera | UwU",
  description: "Edit Camera cameras",
};

export default function IdCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
