import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface ProjectSection {
  heading: string;
  content: string;
}

interface ProjectPageProps {
  title?: string;
  description?: string;
  tech?: string[];
  pdfUrl?: string;
  githubLink?: string;
  sections?: ProjectSection[];
}

export default function ProjectPage({
  title,
  description,
  tech,
  pdfUrl,
  githubLink,
  sections,
}: ProjectPageProps) {
  return (
        <section className="relative min-h-screen text-white bg-black">
        


        {/* Main content */}
        <div className="relative z-10 px-6 py-16 max-w-4xl mx-auto space-y-12">

      {/* Content */}
      <div className="relative z-10 px-6 py-16 max-w-4xl mx-auto space-y-12">
        {/* Title & Description */}
        {(title ?? description) && (
          <div className="space-y-4 text-center">
            {title && <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>}
            {description && <p className="text-lg text-gray-300">{description}</p>}
          </div>
        )}

        {/* Tech Stack */}
        {Array.isArray(tech) && tech.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="bg-indigo-600 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* GitHub Button */}
        {githubLink && (
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              className="text-white border-zinc-600 hover:bg-zinc-800 hover:text-white"
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub Repo
              </a>
            </Button>
          </div>
        )}

        

        {/* Sections */}
        {Array.isArray(sections) && sections.length > 0 && (
          <div className="space-y-16">
            {sections.map(({ heading, content }) => (
              <div key={heading}>
                <h2 className="text-2xl font-semibold mb-2">{heading}</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* PDF Viewer */}
        {pdfUrl && (
          <div>
          <h2 className="text-2xl font-semibold mb-2">Report</h2>
          <div className="w-full h-[600px] border border-zinc-700 rounded-md overflow-hidden">
            
            <iframe
              src={pdfUrl}
              className="w-full h-full"
              title="Project PDF"
            />
          </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
