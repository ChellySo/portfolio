import { Button, Navbar } from "@chellycodeui/portfolio-designsystem";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio Website',
  description: 'This is a portfolio website, showcasing my projects and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sansserif mx-7 md:mx-7 grid gap-12 xs:block xs:gap-0`}>
        <div className="w-full mx-auto max-h-screen">
          <Navbar className="h-24">
            <div className="grid grid-cols-4 gap-1">
              <a href="/" className="place-content-center text-center">About</a>
              <a href="/" className="place-content-center text-center">Experience</a>
              <a href="/" className="place-content-center text-center">Contact</a>
              <Button variant="md/secondary">Resume</Button>
            </div>
          </Navbar>
        </div>
        <div className="grid gap-28 mx-0 md:mx-28 xs:block xs:gap-0">
          {children}
        </div>
      </body>
    </html>
  );
}
