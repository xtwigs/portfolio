import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

// Project Card Component
interface ProjectCardProps {
  className?: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  content: React.ReactNode;
}

const ProjectCard: FC<ProjectCardProps> = async ({ className, ...props }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="">{props.title}</CardTitle>
        <CardDescription className="">
          <span className="text-primary">{props.company}</span>
          <span className="pl-2 text-muted-foreground">
            {props.startDate}
            {props.endDate ? ` - ${props.endDate}` : ""}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="font-mono">{props.content}</CardContent>
    </Card>
  );
};

// Project Card List Component
interface ProjectCardListProps extends React.HTMLAttributes<HTMLDivElement> { }

const ProjectCardList: FC<ProjectCardListProps> = async ({
  className,
  ...props
}) => {
  const projects = [
    {
      title: "Política Aberta",
      company: "Remote",
      startDate: "Dec 2023",
      endDate: undefined,
      content: (
        <ul className="list-disc list-inside">
          <li>
            lead developer of a retrieval-augmented LLM{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://pa.pitorro.de"
              target="_blank"
            >
              system
            </Link>
            , the open-source project intends to simplify access to the lengthy
            political parties&apos; election promises and manifestos
          </li>
          <li>
            built the system using React, Flask and the OpenAI API{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://github.com/politica-aberta"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      {projects.map((proj, index) => {
        return (
          <ProjectCard
            key={index}
            title={proj.title}
            company={proj.company}
            startDate={proj.startDate}
            endDate={proj.endDate}
            content={proj.content}
          />
        );
      })}
    </div>
  );
};

export default ProjectCardList;
