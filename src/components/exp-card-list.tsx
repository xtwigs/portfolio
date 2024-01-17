import PositionCard from "@/components/position-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface ExperienceCardListProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const ExperiencceCardList: FC<ExperienceCardListProps> = async ({
  className,
  ...props
}) => {
  const experiences = [
    {
      title: "master thesis",
      company: "Instituto de Telecomunicações - Sardine Lab",
      startDate: "Oct 2023",
      endDate: "Present",
      location: "Lisbon",
      content: (
        <ul className="list-disc list-inside">
          <li>working on novel architectures in NLP (RetNet, S4, ...)</li>
          <li>
            advised by{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://andre-martins.github.io/"
            >
              Prof. André Martins
            </Link>{" "}
            and{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://mtreviso.github.io/"
            >
              Marcos Treviso
            </Link>
          </li>
        </ul>
      ),
    },
    {
      title: "co-founder & CTO",
      company: "SMP Technologies",
      startDate: "May 2023",
      endDate: "Oct 2023",
      location: "Munich",
      content: (
        <ul className="list-disc list-inside">
          <li>
            designed and coded the company&apos;s{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://smptech.pt"
            >
              website
            </Link>
          </li>
          <li>hosted the required infrastructure on AWS</li>
          <li>
            conceptualized and wrote content for workshops covering Generative
            AI in a business setting
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
            developed a framework for fine-tuning/evaluating various DL models
            in different NLP downstream tasks
          </li>
          <li>co-authored experimental publications that were uncontinued</li>
        </ul>
      ),
    },
  ];

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      {experiences.map((exp, index) => {
        return (
          <PositionCard
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

export default ExperiencceCardList;
