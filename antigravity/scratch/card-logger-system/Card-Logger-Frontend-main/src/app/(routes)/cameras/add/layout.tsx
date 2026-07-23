// src/app/(routes)/cameras/id-card/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Add Camera | UwU",
    description: "Add a new camera to the system.",
};

export default function IdCardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}