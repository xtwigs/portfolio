import About from "@/components/about";
import EducationCardList from "@/components/education";
import ExperienceCardList from "@/components/experiences";
import ProjectCardList from "@/components/projects";
import PublicationCardList from "@/components/publications";

export default function Home() {
  return (
    <main className="flex flex-col mx-6 lg:mx-auto lg:max-w-3xl xl:max-w-5xl">
      <div className="">
        <div id="about" className="h-screen flex items-center w-full">
          <About className="mx-auto" />
        </div>
        <div className="py-16">
          <div id="experience" className="pt-4 mt-32 ">
            <h1 className="title">experience</h1>
            <ExperienceCardList className="pt-8" />
          </div>
          <div id="publications" className="pt-4 mt-32">
            <h1 className="title">publications</h1>
            <PublicationCardList className="pt-8" />
          </div>
          <div id="education" className="pt-4 mt-32">
            <h1 className="title">education</h1>
            <EducationCardList className="pt-8" />
          </div>
          <div id="projects" className="pt-4 mt-32">
            <h1 className="title">projects</h1>
            <ProjectCardList className="pt-8" />
          </div>
        </div>
      </div>
    </main>
  );
}
