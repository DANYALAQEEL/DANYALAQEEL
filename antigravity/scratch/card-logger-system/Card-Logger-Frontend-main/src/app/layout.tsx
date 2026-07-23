import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { JetBrains_Mono } from "next/font/google";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import "@/css/command-center-tokens.css";
import { ConnectionStatusProvider } from "@/providers/ConnectionStatusProvider";
import ClientShell from "@/components/Shell/ClientShell";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Security Command Center",
};

/**
 * Root layout — must be a Server Component in App Router.
 * The "use client" directive was incorrectly placed here in the original
 * codebase; client-side state (loading spinner) has been moved into
 * ClientShell so this file can stay a Server Component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${jetbrainsMono.variable}`}
        suppressHydrationWarning={true}
      >
        <AppRouterCacheProvider>
          <ConnectionStatusProvider>
            <div className="h-screen bg-cc-bg-base text-cc-text-primary">
              <ClientShell>{children}</ClientShell>
            </div>
          </ConnectionStatusProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
