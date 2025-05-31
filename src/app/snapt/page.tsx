import ProjectPage from "@/components/project_page/ProjectPage"

export default async function SNAPTPage() {
  return(

  <ProjectPage
  title="SNAPT: SQL/NoSQL AI Powered Transpiler"
  description="An education driven SQL transfer learning tool"
  tech={["Next.js", "TypeScript", "LLMs", "SQL Translation", "Prompt Engineering", "Education"]}
  githubLink="https://github.com/alexsiracusa/DB-MQP"
  sections={[
    {
      heading: "Motivation",
      content: `Computer Science database college classes often focus exclusively on Relational Databases and Structured Query Language (SQL) Databases for learning. However, with the recent increase in demand for programers well-versed in other types of databases — often called Not Only SQL (NoSQL) Databases — this creates a vacuum in what the market needs, and what students learn in class. This project aimed to help students use their previous SQL knowledge to gain an edge in learning NoSQL Database technologies using Artificial Intelligence.`,
    },
    {
      heading: "Project Abstract",
      content: `Our SQL to NoSQL AI Powered Transpiler (SNAPT) is aiming to help students who have some relational database knowledge and are interested in expanding this knowledge across other relational and even non-relational databases. While usually students focus on learning a specific database management system (DBMS), ​​many core database concepts have only limited differences in the way they work, and especially in syntax. SNAPT leverages knowledge of a specific DBMS to seamlessly translate concepts and statements into another relational database. We further extend this functionality to non-relational, or NoSQL, databases. To bridge this gap, SNAPT incorporates large language models (LLMs) to translate between statements created in PL/SQL (Oracle), PL/pgSQL (PostgreSQL), and MQL (MongoDB). Our tool has the ability to provide constructive feedback and provide explanations of key syntactical differences between languages. Both the original and translated statements can be run on either pre-populated or user provided data stored in a real database to verify the results of running statements across multiple DBMS platforms lead to the same results. This AI-powered learning tool is available as a custom web-based IDE where multiple queries can be created, translated, and run simultaneously.`,
    },
    {
      heading: "Results",
      content: "A tool was developed to assist students in translating queries between the two types of tools. The translations were provided with an explanation and a key differences tab to help assist the student in not only knowing the translation, but also understanding the concept behind it, to help with the transfer learning of the technologies. The project also included a user study that found that 90% of students who tried the tool agreed that it helped teach them how to translate from one query to another, and that using the tool gave them a better understanding of how to write a query from one syntax to another."
    },
    {
      heading: "Project PDF",
      content: "Not yet available due to publication embargo. Come back in October 2025."
    }
  ]}
/>
  )
}
