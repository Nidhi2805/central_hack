import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to My Next.js App</h1>
      </main>
      <Footer />
    </div>
  );
}
