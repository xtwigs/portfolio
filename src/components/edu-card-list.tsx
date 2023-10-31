import PositionCard from "@/components/position-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface EducationCardListProps extends React.HTMLAttributes<HTMLDivElement> {}

const EducationCardList: FC<EducationCardListProps> = async ({
  className,
  ...props
}) => {
  const experiences = [
    {
      title: "bachelor in Computer Science and Engineering",
      company: "Instituto Superior Técnico",
      startDate: "Sep 2018",
      endDate: "Jul 2021",
      location: "Lisbon",
      content: (
        <ul className="list-disc list-inside">
          <li>
            coordinated group projects in areas like Software Engineering,
            Distributed Systems, Networking, and Databases
          </li>
          <li>
            graduated with 17/20 average (Academic Merit Distinction), ECTS: A-
          </li>
        </ul>
      ),
    },
    {
      title: "master in Informatics",
      company: "Technical University of Munich",
      startDate: "Oct 2021",
      endDate: "Present",
      location: "Munich",
      content: (
        <ul className="list-disc list-inside">
          <li>
            completed several courses in ML, Scientific and Quantum Computing
            areas
          </li>
          <li>
            lead the team and built a Text Simplification system with a pipeline
            of Deep Learning models
          </li>
          <li>
            worked on a financial assistant chatbot in the Chair of Digital
            Finance
          </li>
          <li>projected average of 1.8/5, ECTS: A-</li>
        </ul>
      ),
    },
    {
      title: "lisbon machine learning school",
      company: "Instituto Superior Técnico",
      startDate: "Jul 2023",
      endDate: "",
      location: "Lisbon",
      content: (
        <ul className="list-disc list-inside">
          <li>
            week-long school covering everything from fundamental Machine
            Learning to Transformers and Multimodality
          </li>
          <li>
            attended lectures, labs and keynotes from selected speakers and
            distinguished professors and renowned researchers
          </li>
        </ul>
      ),
    },
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
            <Link className="underline hover:text-accent duration-500" href="https://andre-martins.github.io/">
              Prof. André Martins
            </Link>{" "}
            and <Link className="underline hover:text-accent duration-500" href="https://mtreviso.github.io/">Marcos Treviso</Link>
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

export default EducationCardList;