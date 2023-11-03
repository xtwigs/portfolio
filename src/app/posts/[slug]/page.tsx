// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostHeader from "@/components/post-header";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-6 lg:mx-auto max-w-2xl xl:max-w-3xl py-24 md:pl-16 xl:pl-0">
      <PostHeader className="" {...post} />
      <div
        className="pt-16 prose lg:prose-xl prose-invert overflow-hidden"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};

export default PostLayout;
