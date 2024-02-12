import RootLayout from "../layout";
import NavBar from "../components/navBar";
import { libre_baskerville } from "../page";

const blogs = [
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
                  {content.description}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </main>
    </RootLayout>
  );
}
