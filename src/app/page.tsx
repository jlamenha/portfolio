import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucas Lamenha — Portfolio",
  description: "Lucas Lamenha's portfolio"
}

export default async function Home() {
  return (
    <main className="flex">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        </div>
      </div>
    </main>
  );
}
