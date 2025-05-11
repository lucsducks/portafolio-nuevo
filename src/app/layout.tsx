import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio de Lucas",
  description:
    "Portafolio de Lucas, un desarrollador web especializado en Next.js y Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${rubik.variable} ${rubik.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
