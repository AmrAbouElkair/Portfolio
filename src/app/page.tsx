import {
  About,
  Footer,
  Header,
  Hero,
  Experience,
  Skills,
  WorkProjects,
  Contact,
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
        <WorkProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
