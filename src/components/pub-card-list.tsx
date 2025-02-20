import PublicationCard from "@/components/pub-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface PublicationCardListProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const PublicationCardList: FC<PublicationCardListProps> = async ({
  className,
  ...props
}) => {
  const publications = [
    {
      title: "How Effective are State Space Models for Machine Translation?",
      authors: "Hugo Pitorro, Pavlo Vasylenko, Marcos Treviso, André F. T. Martins",
      link: "https://aclanthology.org/2024.wmt-1.111/",
      venue: "WMT 2024",
    },
  ];

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      {publications.map((pub, index) => {
        return (
          <PublicationCard
            key={index}
            title={pub.title}
            authors={pub.authors}
            link={pub.link}
            venue={pub.venue}
          />
        );
      })}
    </div>
  );
};

export default PublicationCardList;
