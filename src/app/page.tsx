import Link from "next/link";
import { type Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Projects } from "@/data/projects-array";

import Hero from "@/components/landing_page/Hero";
import ProjectsSection from "@/components/landing_page/Projects";
import About from "@/components/landing_page/AboutMe";

export const metadata: Metadata = {
  title: "Lucas Lamenha — Portfolio",
  description: "Lucas Lamenha's portfolio"
}

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <ProjectsSection />
    </main>
  );
}
