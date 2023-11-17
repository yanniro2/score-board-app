import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen overflow-hidden bg-gray-950 text-white md:text-[1rem] lg:text-[1rem] text-[1rem]  xl:text-[1rem] 2xl:text-[6rem] p-[1rem]">
        {children}
      </body>
    </html>
  );
}
