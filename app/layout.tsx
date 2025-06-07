import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sora, Space_Grotesk, Lato } from 'next/font/google'
import "./globals.css";
import UserHydrator from "@/components/hydrator/UserHydrator";

const lato = Lato({
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: "Code Crib",
  description: "The art of war",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased`}
      >
        <UserHydrator />
        {children}
      </body>
    </html>
  );
}
