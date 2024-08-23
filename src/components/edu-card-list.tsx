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
            attended lectures, labs and keynotes from selected speakers,
            distinguished professors and renowned researchers
          </li>
        </ul>
      ),
    },
    {
      title: "master in Informatics",
      company: "Technical University of Munich",
      startDate: "Oct 2021",
      endDate: "May 2024",
      location: "Munich",
      content: (
        <ul className="list-disc list-inside">
          <li>
            thesis:{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="/thesis.pdf"
              target="_blank"
            >
              Exploring Efficient Approaches for Long-Context NLP
            </Link>{" "}
          </li>
          <li>
            completed several courses in ML, Scientific and Quantum Computing
            areas
          </li>
          <li>
            built a text simplification{" "}
            <Link
              className="underline hover:text-accent duration-500"
              href="/post/text-simplification-report.pdf"
              target="_blank"
            >
              system
            </Link>{" "}
            with a pipeline of Deep Learning models
          </li>
          <li>
            worked on a financial assistant chatbot in the Chair of Digital
            Finance
          </li>
          <li>graduated with an average of 1.8/5, ECTS: A</li>
        </ul>
      ),
    },
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
            Distributed Systems, Networking and ML
          </li>
          <li>
            graduated with 17/20 average (Academic Merit Distinction), ECTS: A
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
