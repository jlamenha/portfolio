import ProjectPage from "@/components/project_page/ProjectPage"

export default async function ChatVPCPage() {
  return(

  <ProjectPage
  title="ChatVPC"
  description="A real-life application of LLMs for report synthesis"
  tech={["Next.js", "TypeScript", "LLMs", "RAG", "SQL", "Prompt Engineering"]}
  githubLink="https://github.com/v2024b-ai/chatbot-website"
  pdfUrl="/pdfs/chatvpc.pdf"
  sections={[
    {
      heading: "Motivation",
      content: `The Venice Project Center (VPC) has developed over 300 student projects for the benefit of the Venetian community in the span of over 30 years with WPI. This has caused incoming student researchers and local population to not understand the impact that the project center has had in the region. With this in mind, this project set out to leverage the use of AI applications to help raise awareness to the projects developed by researchers at the VPC by making the information in these reports easily digestible and more widely disseminated.`,
    },
    {
      heading: "Project Abstract",
      content: `The project explored the application of Artificial Intelligence (AI) to aid future projects conducted by the Venice Project Center (VPC) improving accessibility to project data and impacts. The team created a website and worked to identify the most viable AI tools available to the VPC and conducted user testing to assess usefulness. Four functional prototypes were developed, along with the compilation of already existing tools that could be useful to future VPC project groups. Results of user testing were utilized to recommend future expansion of the website and potential applications that may be feasible in coming years.`,
    },
    {
      heading: "Results",
      content: "At the end of the project, four functional prototypes were developed: an LLM evaluation tool, aimed at assisting future researchers at choosing what LLMs to use in their projects; a Report Chatbot, which was able to use RAG techniques to retrieve reports from our database and answer questions based on them; a PDF-to-Podcast Generator, which could take reports as input and return audio files on the report, akin to a modern podcast; and a CSV to Chatbot function, which would use Text-to-SQL query generation to retrieve data from our database of student-gathered information and answer questions on that data."
    }
  ]}
/>
  )
}
