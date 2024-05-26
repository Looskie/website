import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../../components/AnimatedText";
import AnimatedPage from "../../components/PageWrapper";
import { BLOG_POSTS } from "../../utils/constants";

export default function Blog() {
  return (
    <AnimatedPage>
      <Head>
        <title>cody — blog</title>
        <meta
          name="description"
          content="i write about software engineering, design, and other things i find interesting."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="Blog" />
      </div>
      <div className="flex flex-col gap-[100px]">
        <h1 className="text-xl max-w-3xl">
          i write about software engineering, design, and other things i find
          interesting.
        </h1>
        <ul>
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <Link className="" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedPage>
  );
}
