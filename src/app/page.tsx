import About from "@/components/about";
import BlogCardList from "@/components/blog-card-list";
import EducationCardList from "@/components/edu-card-list";
import ExperiencceCardList from "@/components/exp-card-list";

export default function Home() {
  return (
    <main className="flex flex-col max-w-5xl mx-6 xl:mx-auto">
      <div id="about" className="h-screen flex items-center w-full">
        <About className="mx-auto" />
      </div>
      <div className="py-16">
        <div id="experience" className="pt-4 ">
          <h1 className="title">experience</h1>
          <ExperiencceCardList className="pt-8" />
        </div>
        <div id="education" className="pt-4 ">
          <h1 className="pt-32 title">education</h1>
          <EducationCardList className="pt-8" />
        </div>
        <div id="blog" className="pt-4 ">
          <h1 className="pt-32 title">blog</h1>
          <BlogCardList className="pt-8" />
        </div>
      </div>
    </main>
  );
}
