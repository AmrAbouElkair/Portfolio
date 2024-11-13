import {
  About,
  Footer,
  Header,
  Hero,
  Experience,
} from "@/components/views/home";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
