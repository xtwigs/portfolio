import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React, { FC } from "react";

interface PublicationCardProps {
  className?: string;
  title: string;
  authors: string;
  link: string;
  venue: string;
}

const PublicationCard: FC<PublicationCardProps> = async ({ className, ...props }) => {
  return (
    <Link href={props.link} target="_blank">
      <Card className="hover:bg-accent hover:text-accent-foreground duration-500">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription className="">
            <span className="text-primary ">{props.authors}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="font-mono">{props.venue}</CardContent>
      </Card>
    </Link>
  );
};

export default PublicationCard;
