import { Projects } from "@/data/projects-array";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";


export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Projects.map(({ title, desc, link, githubLink }) => (
            <Card
            key={title}
            className="bg-[#1a1a1a] border border-zinc-800 text-white flex flex-col justify-between h-full transition hover:shadow-lg"
            >

                
                <div>
                    <CardHeader>
                    <CardTitle className="text-white">{title}</CardTitle>
                    <CardDescription className="text-zinc-400">{desc}</CardDescription>
                    </CardHeader>
                </div>
                <CardContent className="mt-auto flex flex-col gap-2">

                {githubLink && (
                    <Button
                    asChild
                    variant="outline"
                    className="text-white border-zinc-600 hover:bg-zinc-800 hover:text-white"
                    >
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>
                    </Button>
                )}
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    <a href={`/${link}`} rel="noopener noreferrer">
                    View Project
                    </a>
                </Button>

                
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
