import {
  About,
  Footer,
  Header,
  Hero,
  Experience,
  Skills,
  WorkProjects,
  Contact,
  PersonalProjects,
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
        <PersonalProjects />
        <WorkProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
