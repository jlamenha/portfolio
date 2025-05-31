import ProjectPage from "@/components/project_page/ProjectPage"

export default async function SousChefPage() {
  return(
  <ProjectPage
  title="Sous-Chef"
  description="A smart kitchen assistant that helps users manage food inventory and generate recipes based on available ingredients using AI"
  tech={["React Native","Expo", "SQLite","TypeScript", "Python FastAPI", "OpenCV", "Computer Vision", "LLMs"]}
  githubLink="https://github.com/keiraSchoolcraft/Sous-Chef"
  pdfUrl=""
  sections={[
    {
      heading: "Motivation",
      content: `It can be hard to figure out what to eat based on what you have at home. Sous Chef aims to help with that by using Artificial Intelligence paired with Computer Vision to help the user not have to worry about this anymore!`,
    },
    {
      heading: "Results",
      content: "For this project, a React Native app was developed with an SQLite local database to store the user's groceries. The user can input groceries into the app — either by typing it in, or using the Computer Vision OpenCV algorithm to recognize it — and generate a recipe from what the user has at home using Google's Gemini Large Language Model."
    },
    {
        heading: "Presentation",
        content: <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQlcRGPyT7zC1c5Y35etqNOPkvlUXz6_l4qfK3VPf94n3rbHQAoTsoPTH5A7FncrpbEzu9s3Zfk7_Yj/pubembed?start=false&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true}></iframe>
    },
    {
        heading: "Videos",
        content: <iframe
                        src="https://drive.google.com/file/d/1wpUQ4XXavz-GwrvjiV6lnS5Fpk5tI66G/preview"
                        width="100%"
                        height="480"
                        allow="autoplay"
                        allowFullScreen
                        className="rounded-lg"
                        />
    },
  ]}
/>
  )
}
