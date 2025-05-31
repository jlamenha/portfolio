import "@/styles/globals.css";
import * as React from "react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { NavBar } from "@/components/navBar";
import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Lucas Lamenha — Portfolio",
  description: "Lucas Lamenha's Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        <TRPCReactProvider>
          <Toaster />
            <div className="flex flex-col w-full min-h-screen">
              <NavBar />
              <div className="flex-grow bg-muted">
                {children}
              </div>
            </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
