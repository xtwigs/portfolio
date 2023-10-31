import { cn } from "@/lib/utils";
import { FC } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface PostHeaderProps {
  className?: string;
  title: string;
  date: string;
  description: string;
}

const PostHeader: FC<PostHeaderProps> = async ({ className, ...props }) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle className="">{props.title}</CardTitle>
        <CardDescription className="flex flex-row">
          <span className="text-muted">{props.date}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="font-mono">{props.description}</CardContent>
    </Card>
  );
};

export default PostHeader;
