// src/app/(routes)/cameras/id-card/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "ID Card Camera | :>",
    description: "This is the ID Card Camera page",
};

export default function IdCardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}