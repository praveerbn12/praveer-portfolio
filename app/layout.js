import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Praveer Nagaraja Byndoor | Software Engineer",
  description:
    "Software engineer building backend, distributed, data-intensive, and applied AI systems. MS Information Systems at Syracuse University, graduating December 2026.",
  keywords: [
    "Praveer Nagaraja Byndoor",
    "Software Engineer",
    "Backend Engineer",
    "Applied AI",
    "Forward Deployed Engineer",
    "Data Engineer",
    "Java",
    "Spring Boot",
    "Python",
    "Syracuse University",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}