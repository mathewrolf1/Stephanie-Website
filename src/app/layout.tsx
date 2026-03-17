import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Stephanie Guerra Photography",
  description: "Editorial, romantic wedding photography portfolio.",
  openGraph: {
    title: "Stephanie Guerra Photography",
    description: "High Quality Personal Photography.",
    images: [
      {
        url: "https://res.cloudinary.com/dwvx7bzki/image/upload/v1773732725/stephicon_euw4ec.jpg",
        width: 501,
        height: 501,
        alt: "Stephanie Guerra Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephanie Guerra Photography",
    description: "Editorial, romantic wedding photography portfolio.",
    images: ["https://res.cloudinary.com/dwvx7bzki/image/upload/v1773732725/stephicon_euw4ec.jpg"],
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
        className={`${headingFont.variable} ${bodyFont.variable} ${scriptFont.variable} antialiased bg-[--color-background] text-[--color-foreground]`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
