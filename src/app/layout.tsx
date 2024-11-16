import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amr M.Abouelkher - Interactive Frontend Developer",
  description: "Amr Abouelkher personal portfolio's website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
