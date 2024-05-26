import { type ReactNode } from "react";
import AnimatedPage from "./PageWrapper";
import Link from "next/link";
import { type BLOG_POSTS } from "../utils/constants";
import Head from "next/head";
import dayjs from "dayjs";

export default function BlogPageWrapper({
  children,
  blog,
}: {
  children?: ReactNode | undefined;
  blog: (typeof BLOG_POSTS)[number];
}) {
  return (
    <AnimatedPage>
      <Head>
        <title>cody — blog</title>
        <meta name="description" content={blog.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/blog">Back to blogs</Link>
      <div className="flex flex-col mt-20 max-w-4xl">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <span className="text-primary-300 mt-2 font-light">
          Written on {dayjs(blog.writtenAt).format("MMMM D, YYYY")}
        </span>
        <div className="flex flex-col gap-6 mt-16 blog">{children}</div>
      </div>
    </AnimatedPage>
  );
}
