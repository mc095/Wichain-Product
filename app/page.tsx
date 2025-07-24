import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <Hero />
      <Faq />
      <Footer />
    </main>
  );
}
