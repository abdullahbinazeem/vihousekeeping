import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";

import "./globals.css";

const worksans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vi Housekeeping",
  description:
    "The Most Affordable, High-End House and Exterior Cleaning Provider In Vancouver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={worksans.className}>{children}</body>
    </html>
  );
}
