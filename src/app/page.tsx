import {
  About,
  Footer,
  Header,
  Hero,
  Experience,
  Skills,
  Projects,
} from "@/components/views/home";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
