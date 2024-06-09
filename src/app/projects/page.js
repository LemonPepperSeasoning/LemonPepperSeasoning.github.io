import RootLayout from "../layout";
import NavBar from "../components/navBar";
import { libre_baskerville } from "../page";

const projectList = [
  {
    link: "https://github.com/LemonPepperSeasoning/neural-network-from-scratch",
    title: "Neural netowrk from Scratch with Rust",
    description: "Implemented a neural network from scracth using Rust. More specifically, Multi-Layer Perceptron (MLP).",
    img: "/static/img/projects/project-neural-network.png",
    date: "11th march, 2024",
    tag: "Neural Network"
  },
  {
    link: "#",
    title: "Palm Tree: Algorithmic trading bot",
    description: "Using secret magic to beat the market.",
    img: "/static/img/projects/project-palmtree.png",
    date: "10th october, 2022",
    tag: "Data Science"
  },
  {
    link: "https://github.com/LemonPepperSeasoning/Hasher",
    title: "Hasha: Hash collision computer",
    description: "Hasha is a open source ios-app, which uses brute-force algorithm to find SHA-256 hash collision.",
    img: "/static/img/projects/project-hasha.png",
    date: "10th october, 2022",
    tag: "IOS App"
  },
  {
    link: "https://github.com/LemonPepperSeasoning/TalkingFaceGeneration-with-Emotion",
    title: "Talking Face Generation System",
    description: "Emotional Talking Facial Video Generation using Single Image and Sentence.",
    img: "/static/img/projects/project-talkingfacegen.png",
    date: "10th october, 2022",
    tag: "Neural Network"
  },
  {
    link: "https://github.com/LemonPepperSeasoning/Stockly",
    title: "Stockly: Portfolio management app",
    description: "Stockly is an portfolio management app, which allows users to view historical data on price of stocks and their descriptions. Users may also use the portfolio to store stocks which they have invested in and also add stocks to a watchlist if they are interested in them. Stockly is available on the Google Play Store.",
    img: "/static/img/projects/project-stockly.png",
    date: "10th october, 2022",
    tag: "Android App"
  },
]

export default function Projects() {
  return (
    <RootLayout>
      <main className={`flex min-h-screen justify-center p5-8 p-8 ${libre_baskerville.className}`}>
        <div className="max-w-lg text-sm">
          <NavBar />

          <ul role="list" class="justify-center flex-1 max-w-4xl text-left">
            {projectList.map((project) => (
              <li key={project.title}>
                <a href={project.link} className="grid grid-cols-1 mb-6 md:grid-cols-[70%,1fr] border-gray-200 border-b dark:border-gray-700 rounded p-5 gap-4 hover:bg-gray-200" >
                  <div>
                    <h2 class="mt-1 mb-3 text-xl font-semibold">
                      {project.title}
                    </h2>
                    <p class="mb-3 text-sm">
                      {project.description}
                    </p>
                    <div class="flex items-center ">
                      <div href="#"
                        class="px-2 py-1 mr-2 text-xs bg-gray-700 rounded-full text-gray-100">
                        {project.tag}
                      </div>
                      <span class="text-xs">
                        {project.date}
                      </span>
                    </div>
                  </div>
                  <div>
                    <img src={project.img} alt="" class="object-cover w-full rounded-md h-80 md:h-44" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main >
    </RootLayout >
  );
}
