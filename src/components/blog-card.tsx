import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";


interface BlogCardProps {
  className?: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}

const BlogCard: FC<BlogCardProps> = async ({ className, ...props }) => {
  return (
    <Link href={props.slug}>
      <Card
        className={cn(
          "hover:bg-accent hover:text-accent-foreground lg:h-48 duration-500 flex flex-col justify-between",
          className
        )}
      >
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription className="flex flex-row">
            <time dateTime={props.date} className="text-muted">
              {format(parseISO(props.date), "LLLL d, yyyy")}
            </time>
            
          </CardDescription>
        </CardHeader>
        <CardContent className="font-mono">{props.description}</CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
