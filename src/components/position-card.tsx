import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { FC } from "react";

interface PositionCardProps {
  className?: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  content: React.ReactNode;
}

const PositionCard: FC<PositionCardProps> = async ({ className, ...props }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription className="flex flex-row">
          <span className="text-primary">{props.company}</span>
          <span className="pl-2 text-muted">
            {props.startDate}
            {props.endDate ? ` - ${props.endDate}` : ""}, {props.location}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className=" font-mono">{props.content}</CardContent>
    </Card>
  );
};

export default PositionCard;
