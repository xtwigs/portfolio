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
      startDate: "Dec 2023",
      endDate: "May 2024",
      location: "Lisbon",
      content: (
        <ul className="list-disc list-inside">
          <li>
            worked on State Space architectures in NLP for document-level
            machine translation (RetNet, S4, Mamba, ...)
          </li>
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
          <li>
            <Link
              className="underline hover:text-accent duration-500"
              href="thesis.pdf"
            >
              final document
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
            co-founded a startup intended to solve and automate enterprise
            problems and tasks with modern AI technologies (Generative AI,
            Computer Vision)
          </li>

          <li>
            Designed and implemented the company&apos;s{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://smptech.pt"
            >
              website
            </Link>
            , hosting the required business infrastructure on AWS
          </li>
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
          <li>co-authored publication drafts that were discontinued</li>
          <li>
            advised by{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://mtreviso.github.io/"
            >
              Anum Afzal
            </Link>{" "}
            and{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="https://wwwmatthes.in.tum.de/pages/88bkmvw6y7gx/Prof.-Dr.-Florian-Matthes"
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
