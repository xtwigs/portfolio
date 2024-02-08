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
            lead developer of a Retrieval-Augmented Generation LLM{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://politica-aberta.pt"
            >
              system
            </Link>
          </li>
          <li>
            the open-source project intends to simplify access to the political
            parties&apos; election promises and manifests.
          </li>
          <li>
            built the system using React, Flask and the OpenAI API.{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://github.com/politica-aberta"
            >
              Github
            </Link>
            .
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
