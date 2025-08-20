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

// Publication Card Component
interface PublicationCardProps {
  className?: string;
  title: string;
  authors: string;
  date: string;
  link: string;
  venue: string;
}

const PublicationCard: FC<PublicationCardProps> = async ({
  className,
  ...props
}) => {
  return (
    <Link href={props.link} target="_blank">
      <Card className="hover:bg-accent hover:text-accent-foreground duration-500">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription className="">
            <span className="text-primary ">{props.authors}</span>
            <span className="pl-2 text-muted-foreground">{props.date}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="font-mono">{props.venue}</CardContent>
      </Card>
    </Link>
  );
};

// Publication Card List Component
interface PublicationCardListProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const PublicationCardList: FC<PublicationCardListProps> = async ({
  className,
  ...props
}) => {
  const publications = [
    {
      title:
        "LaTIM: Measuring Latent Token-to-Token Interactions in Mamba Models",
      authors: "Hugo Pitorro, Marcos Treviso",
      date: "Feb 2025",
      link: "https://arxiv.org/abs/2502.15612",
      venue: "ACL 2025 (outstanding paper award)",
    },
    {
      title: "How Effective are State Space Models for Machine Translation?",
      authors:
        "Hugo Pitorro, Pavlo Vasylenko, Marcos Treviso, André F. T. Martins",
      date: "Nov 2024",
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
            date={pub.date}
            link={pub.link}
            venue={pub.venue}
          />
        );
      })}
    </div>
  );
};

export { PublicationCard, PublicationCardList };
export default PublicationCardList;
