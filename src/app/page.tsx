import About from "@/components/about";
import BlogCardList from "@/components/blog-card-list";
import EducationCardList from "@/components/edu-card-list";
import ExperiencceCardList from "@/components/exp-card-list";
import Footer from "@/components/footer";
import ProjectCardList from "@/components/project-card-list";

export default function Home() {
  return (
    <main className="flex flex-col mx-6 lg:mx-auto lg:max-w-3xl xl:max-w-5xl">
      <div className="lg:pl-32">
        <div id="about" className="h-screen flex items-center w-full">
          <About className="mx-auto" />
        </div>
        <div className="py-16">
          <div id="experience" className="pt-4 mt-32 ">
            <h1 className="title">experience</h1>
            <ExperiencceCardList className="pt-8" />
          </div>
          <div id="education" className="pt-4 mt-32">
            <h1 className="title">education</h1>
            <EducationCardList className="pt-8" />
          </div>
          <div id="projects" className="pt-4 mt-32">
            <h1 className="title">projects</h1>
            <ProjectCardList className="pt-8" />
          </div>
          <div id="blog" className="pt-4 mt-32">
            <h1 className="title">blog</h1>
            <BlogCardList className="pt-8" />
          </div>
          {/* <Footer className="pt-40 pb-24" /> */}
        </div>
      </div>
    </main>
  );
}
