import RootLayout from "../layout";
import NavBar from "../components/navBar";
import { libre_baskerville } from "../page";

const blogs = [
  {
    title: "My first Rust project",
    description: `This weekend, I decided to dive into the Rust programming language, fueled by curiosity and the desire to learn something new.
    Conveniently, my workplace had an internal learning session on neural networks, sparking an idea to implement one from scratch using Rust.
    Now, keep in mind, this was my time writing Rust code, so I probably made bunch of rookie mistakes... Over the project, I learned Rust's unique concepts like Borrow, Ownership, and Traits – a far cry from the comfort of C++, Java, or Python that I'm used to.
    Despite the code quirks and inevitable head-scratching, it was great learning experience!
    If you are interested here is the code: https://github.com/LemonPepperSeasoning/neural-network-from-scratch
    `
  },
  {
    title: "My first blog",
    description: "This is my first blog. I dont know what I want to write a blog about more to come..."
  },
]

export default function Blog() {
  return (
    <RootLayout>
      <main className={`flex min-h-screen justify-center p-8 ${libre_baskerville.className}`}>
        <div className="max-w-lg text-sm">
          <NavBar />
          <ul role="list" class="justify-center flex-1 max-w-4xl text-left">
            {blogs.map((content) => (
              <div className="pb-6 mb-6 border-b border-gray-200">
                <h2 class="mt-1 mb-3 text-xl font-semibold">


                  {content.title}
                </h2>
                <div>
                  {content.description.split('\n').map((line, i) => (
                    <p>{line}</p>
                  ))}
                  {/* {content.description} */}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </main>
    </RootLayout>
  );
}
