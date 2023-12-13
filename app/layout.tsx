import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

const Ysabeau_Font = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ysabeau",
});

export const metadata: Metadata = {
  title: "Oppurtunities Dashboard",
  description: "An Dashboard to see oppurtunies with filters.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <ColorSchemeScript /> */}
      <body className={[Ysabeau_Font.variable, Ysabeau_Font.className].join(" ")}>
        <MantineProvider >{children}</MantineProvider>
      </body>
    </html>
  );
}
