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

// Experience Card Component
interface ExperienceCardProps {
  className?: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  content: React.ReactNode;
}

const ExperienceCard: FC<ExperienceCardProps> = async ({
  className,
  ...props
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="">{props.title}</CardTitle>
        <CardDescription className="">
          <span className="text-primary">{props.company}</span>
          <span className="pl-2 text-muted-foreground">
            {props.startDate}
            {props.endDate ? ` - ${props.endDate}` : ""}, {props.location}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="font-mono">{props.content}</CardContent>
    </Card>
  );
};

// Experience Card List Component
interface ExperienceCardListProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const ExperienceCardList: FC<ExperienceCardListProps> = async ({
  className,
  ...props
}) => {
  const experiences = [
    {
      title: "researcher",
      company: "Instituto de Telecomunicações - Sardine Lab",
      startDate: "Sep 2024",
      endDate: "Present",
      location: "Lisbon",
      content: (
        <ul className="list-disc list-inside">
          <li>
            working on context-efficient alternatives to the transformer
            architecture and their interpretability mechanisms
          </li>
          <li>
            advised by{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://andre-martins.github.io/"
              target="_blank"
            >
              Prof. André Martins
            </Link>{" "}
            and{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://mtreviso.github.io/"
              target="_blank"
            >
              Prof. Marcos Treviso
            </Link>
          </li>
        </ul>
      ),
    },
    {
      title: "co-founder",
      company: "SMP Technologies",
      startDate: "May 2023",
      endDate: "Oct 2023",
      location: "Munich",
      content: (
        <ul className="list-disc list-inside">
          <li>
            co-founded a startup to solve and automate enterprise problems with
            modern AI technologies (LLMs, diffusion, computer vision, etc...)
          </li>
          <li>
            designed and built the company&apos;s business infrastructure,
            deployed using AWS
          </li>
        </ul>
      ),
    },
    {
      title: "research assistant",
      company: "Technical University of Munich - Sebis",
      startDate: "Nov 2022",
      endDate: "Jul 2023",
      location: "Munich",
      content: (
        <ul className="list-disc list-inside">
          <li>
            led a project for evaluating different sparse models in abstractive
            summarization
          </li>
          <li>
            developed a framework for fine-tuning/evaluating various DL models
            in different NLP downstream tasks
          </li>
          <li>
            advised by{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://scholar.google.com/citations?user=xpZ8GRgAAAAJ"
              target="_blank"
            >
              Anum Afzal
            </Link>{" "}
            and{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://wwwmatthes.in.tum.de/pages/88bkmvw6y7gx/Prof.-Dr.-Florian-Matthes"
              target="_blank"
            >
              Prof. Dr. Florian Matthes
            </Link>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      {experiences.map((exp, index) => {
        return (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            startDate={exp.startDate}
            endDate={exp.endDate}
            location={exp.location}
            content={exp.content}
          />
        );
      })}
    </div>
  );
};

export default ExperienceCardList;
