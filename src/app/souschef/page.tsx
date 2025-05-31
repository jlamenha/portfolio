import ProjectPage from "@/components/project_page/ProjectPage"

export default async function SousChefPage() {
  return(
  <ProjectPage
  title="Sous-Chef"
  description="A smart kitchen assistant that helps users manage food inventory and generate recipes based on available ingredients using AI"
  tech={["Machine Learning", "Python", "Reinforcement Learning", "Imitation Learning", "PyTorch", "Deep Q-Networks"]}
  githubLink="https://github.com/keiraSchoolcraft/Sous-Chef"
  pdfUrl=""
  sections={[
    {
      heading: "Motivation",
      content: `In the realm of Machine Learning, the Snake Game has been a target for multiple researchers attempting to make a computer beat the game. Often, the paradigm that is used for this is Reinforcement Learning. For this project, Reinforcement Learning was compared with Imitation Learning to compare the results. `,
    },
    {
      heading: "Results",
      content: "By the end, a Deep Q-Network (DQN) and an Imitation Learning pipeline were developed and compared against each other. This project strengthened the use of the Reinforcement Learning paradigm over traditional Machine Learning. While the Reinforcement Learning (DQN) model was able to achieve results over 20 points consistently, the Imitation Learning model struggled to achieve even 2 points in a single game."
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
