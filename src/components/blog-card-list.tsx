import React, { FC } from "react";

import BlogCard from "@/components/blog-card";
import { cn } from "@/lib/utils";

interface BlogCardListProps extends React.HTMLAttributes<HTMLDivElement> {}

const BlogCardList: FC<BlogCardListProps> = async ({ className, ...props }) => {
  const blogs = [
    {
      title: "Future of Artificial Intelligence",
      description: "admission essay for my master's at TUM",
      date: "2022.04.13",
      slug: "future-of-ai",
    },
    {
      title: "Quantum Computing via Ion Trapping",
      description: "seminar report for Advanced Topics of Quantum Computing",
      date: "2022.05.22",
      slug: "ion-trap-qcs",
    },
    {
      title: "Make it Simple: Simplifying English Sentences",
      description: "a study on Text Simplification",
      date: "2022.08.05",
      slug: "text-simplification",
    },
  ];

  return (
    <div className={cn("grid lg:grid-cols-2 gap-4", className)}>
      {blogs.map((blog, index) => {
        return (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            slug={blog.slug}
          />
        );
      })}
    </div>
  );
};

export default BlogCardList;
