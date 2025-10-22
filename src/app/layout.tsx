import type { Metadata } from "next";

import "../styles/globals.css";

import QueryProvider from "@/components/QueryProvider";
import { Providers } from "@/store/provider";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Emilist Admin",
  description:
    "Emilist Admin Panel - Manage and oversee jobs, projects, and user activities with ease.",
  openGraph: {
    title: "Emilist Admin - Manage Jobs and Projects",
    description:
      "Emilist Admin Panel - Your hub for managing jobs and projects.",
    images: [
      {
        url: "/hero-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Emilist Admin Preview Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Providers>{children}</Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
