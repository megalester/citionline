import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import DisableInspect from "@/components/layout/DisableInspect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Banking, Mortgages, Personal Loans, Investing | Citi.com",
  description:
    "Open a bank account, apply for a personal loan or home equity line of credit, or start investing in your financial future with Citi. Learn more about our range of services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DisableInspect>{children}</DisableInspect>
      </body>
    </html>
  );
}
