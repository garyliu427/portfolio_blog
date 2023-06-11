import NavBar from './components/NavBar';
import SkillsPage from './skills/page';

export default function Home() {
  return (
    <main className="h-screen">
      <NavBar />
      {/* <section id="about" className="flex flex-col items-center justify-center">
        <div className="">About</div>

      </section> */}
      <section
        id="skills"
        className="flex flex-col items-center justify-center"
      >
        <SkillsPage />
      </section>

      {/* <section
        id="projects"
        className="flex flex-col items-center justify-center"
      >
        <div className="">Projects</div>
      </section> */}
    </main>
  );
}
