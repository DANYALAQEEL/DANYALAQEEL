// src/app/(routes)/cameras/id-card/layout.tsx
import { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "CNIC Count | :>",
  description: "CNIC Count | :>",
};

export default function IdCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
