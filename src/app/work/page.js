import RootLayout from "../layout";
import NavBar from "../components/navBar";
import { libre_baskerville } from "../page";

export default function Work() {
  return (
    <RootLayout>
      <main className={`flex min-h-screen justify-center p-8 ${libre_baskerville.className}`}>
        <div className="max-w-lg text-sm">
          <NavBar />
          <h1>Work Page</h1>
          <p>TBD</p>
        </div>
      </main>
    </RootLayout>
  );
}
