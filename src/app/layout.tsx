import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "SG Innovations - Modern Technology Solutions",
  description: "We create cutting-edge digital solutions that transform businesses and enhance user experiences. From web applications to mobile solutions, we bring your ideas to life with modern technology.",
  keywords: "web development, mobile apps, cloud solutions, AI integration, technology consulting",
  authors: [{ name: "SG Innovations" }],
  openGraph: {
    title: "SG Innovations - Modern Technology Solutions",
    description: "We create cutting-edge digital solutions that transform businesses and enhance user experiences.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
