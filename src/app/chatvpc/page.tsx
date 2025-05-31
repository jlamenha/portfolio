import ProjectPage from "@/components/project_page/ProjectPage"

export default async function ChatVPCPage() {
  return(

  <ProjectPage
  title="ChatVPC"
  description="SQL-to-NoSQL translation using LLMs"
  tech={["Next.js", "TypeScript", "LLMs"]}
  githubLink="https://github.com/example/snapt"
  pdfUrl="/pdfs/snapt.pdf"
  sections={[
    {
      heading: "Motivation",
      content: `Helping developers migrate from SQL to MongoDB with minimal friction.`,
    },
    {
      heading: "Results",
      content: `We achieved over 80% accuracy on benchmark query sets.`,
    },
  ]}
/>
  )
}
