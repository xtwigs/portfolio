import React, { FC } from "react";
import { allPosts } from "contentlayer/generated";

import BlogCard from "@/components/blog-card";
import { cn } from "@/lib/utils";

interface BlogCardListProps extends React.HTMLAttributes<HTMLDivElement> {}

const BlogCardList: FC<BlogCardListProps> = async ({ className, ...props }) => {
  // sort posts by date
  allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <div className={cn("grid lg:grid-cols-2 gap-4", className)}>
      {allPosts.sort().map((blog, index) => {
        return (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            slug={blog.url}
          />
        );
      })}
    </div>
  );
};

export default BlogCardList;
