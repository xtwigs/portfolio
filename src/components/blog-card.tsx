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

interface BlogCardProps {
  className?: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}

const BlogCard: FC<BlogCardProps> = async ({ className, ...props }) => {
  return (
    <Link href={`posts/${props.slug}`}>
      <Card
        className={cn(
          "hover:bg-accent hover:text-accent-foreground lg:h-48 duration-500",
          className
        )}
      >
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription className="flex flex-row">
            <span className="text-muted">{props.date}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="font-mono">{props.description}</CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
