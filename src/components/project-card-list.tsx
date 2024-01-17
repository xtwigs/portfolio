import PositionCard from "@/components/position-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface ProjectCardListProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProjectCardList: FC<ProjectCardListProps> = async ({
  className,
  ...props
}) => {
  const projects = [
    {
      title: "Política Aberta",
      company: "Remote",
      startDate: "Dec 2023",
      endDate: "Present",
      location: "Lisbon",
      content: (
        <ul className="list-disc list-inside">
          <li>
            lead developer of the open-source{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://politica-aberta.pt"
            >
              project
            </Link>
          </li>
          <li>built a RAG pipeline for the current portuguese elections</li>
          <li>
            built the website using React with NextJS and a LlamaIndex-powered
            Flask server
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      {projects.map((proj, index) => {
        return (
          <PositionCard
            key={index}
            title={proj.title}
            company={proj.company}
            startDate={proj.startDate}
            endDate={proj.endDate}
            location={proj.location}
            content={proj.content}
          />
        );
      })}
    </div>
  );
};

export default ProjectCardList;
