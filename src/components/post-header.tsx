import { cn } from "@/lib/utils";
import { FC } from "react";
import { format, parseISO } from "date-fns";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

interface PostHeaderProps {
  className?: string;
  title: string;
  date: string;
  pdf?: string;
  description: string;
}

const PostHeader: FC<PostHeaderProps> = async ({ className, ...props }) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <div className="flex">
          <CardTitle className="">{props.title}</CardTitle>
          {props.pdf && (
            <Link
              href={props.pdf}
              className="hover:text-accent duration-500 ml-2 mt-[2px]"
              prefetch={false}
            >
              <ArrowDownToLine size={24} />
            </Link>
          )}
        </div>
        <CardDescription className="flex flex-row ">
          <time dateTime={props.date} className="text-muted text-lg">
            {format(parseISO(props.date), "LLLL d, yyyy")}
          </time>
        </CardDescription>
      </CardHeader>
      <CardContent className="font-mono">{props.description}</CardContent>
    </Card>
  );
};

export default PostHeader;
