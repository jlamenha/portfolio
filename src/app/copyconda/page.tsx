import ProjectPage from "@/components/project_page/ProjectPage"

export default async function CopyCondaPage() {
  return(
<main>
  <ProjectPage
  title="CopyConda"
  description="Reinforcement Learning vs Imitation Learning Snake Game"
  tech={["Machine Learning", "Python", "Reinforcement Learning", "Imitation Learning", "PyTorch", "Deep Q-Networks"]}
  githubLink="https://github.com/keiraSchoolcraft/Snake-Game-Data-Collection"
  pdfUrl="/pdfs/copyconda.pdf"
  sections={[
    {
      heading: "Motivation",
      content: `In the realm of Machine Learning, the Snake Game has been a target for multiple researchers attempting to make a computer beat the game. Often, the paradigm that is used for this is Reinforcement Learning. For this project, Reinforcement Learning was compared with Imitation Learning to compare the results. `,
    },
    {
      heading: "Results",
      content: "By the end, a Deep Q-Network (DQN) and an Imitation Learning pipeline were developed and compared against each other. This project strengthened the use of the Reinforcement Learning paradigm over traditional Machine Learning. While the Reinforcement Learning (DQN) model was able to achieve results over 20 points consistently, the Imitation Learning model struggled to achieve even 2 points in a single game."
    }
  ]}
/>
    <section className="relative min-h-screen text-white bg-black">
        <div className="relative z-10 px-6 py-16 max-w-4xl mx-auto space-y-12">
            <div className="space-y-16">
                
                    <h2 className="text-2xl font-semibold mb-2">Presentation</h2>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ9G9ZH7wseMgS4ra27wVF0g3TeFg0SXvOWvgngrxjfdKc7RLi_EEWOH0hyGB34cPA1wS_FnvRC8kqW/pubembed?start=false&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true}></iframe>
                    </p>
            
            </div>
          </div>
    </section>

    <section className="relative min-h-screen text-white bg-black">
        <div className="relative z-10 px-6 py-16 max-w-4xl mx-auto space-y-12">
            <div className="space-y-16">
                
                    <h2 className="text-2xl font-semibold mb-2">Videos</h2>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        <iframe
                        src="https://drive.google.com/file/d/1My7SDG93BGcydFXf5KvCAv5oFHsH5r4U/preview"
                        width="100%"
                        height="480"
                        allow="autoplay"
                        allowFullScreen
                        className="rounded-lg"
                        />
                    </p>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        <iframe
                        src="https://drive.google.com/file/d/1DC68huHBBPbVZkEmfsGe5Hjro125EfBS/preview"
                        width="100%"
                        height="480"
                        allow="autoplay"
                        allowFullScreen
                        className="rounded-lg"
                        />
                    </p>
            
            </div>
          </div>
    </section>
    </main>
  )
}
