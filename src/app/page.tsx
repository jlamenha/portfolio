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
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Lucas Lamenha — Portfolio",
  description: "Lucas Lamenha's portfolio"
}

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight"> Welcome to Lucas Lamenha&apos;s Portfolio! </h1>
      </div>
      <div className="container flex flex-col items-center justify-center gap-12">
        <div className="w-[70vw]">

          <Card>
            <CardTitle className="p-6 pb-0">
              Who am I?
            </ CardTitle>
            <CardContent className="p-10 pt-0 text-justify">
              I am a Computer Science Bachelor Student and Artificial Intelligence Master&apos;s Student from Worcester Polytechnic Institute who has a special interest in Artificial Intelligence, Software Engineering, Database Development and Data Science. I made this website to display some of the projects that I&apos;ve worked on.
            </ CardContent>
          </Card>
        </div>
        <div className = "p-6">
          <Card>
          <CardContent className="p-10 pt-3 text-justify">
            Please bear with me, this website is still under construction :)
          </CardContent>
          </Card>
        </div>
        </div>

    <div className="space-y-0.5">
      <h1 className="text-2xl font-bold tracking-tight text-center">Projects</h1>
      <p className="text-muted-foreground text-center pb-3"> These are the projects I've worked on </p>
    </div>
  
  

  <div className="flex flex-wrap gap-2">
        {Projects.map((project) => (
          <Link key={project.title} href={project.link}>
            <Card className="aspect-square w-64 transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.desc}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
        

    </main>
  );
}
