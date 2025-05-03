import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import client from "../hooks/contentfulClient";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blogPost",
        "fields.slug": slug,
        limit: 1,
      })
      .then((response) => {
        if (response.items.length > 0) {
          setBlog(response.items[0]);
        } else {
          setError("Blog post not found.");
        }
      })
      .catch(() => setError("Failed to load blog post."));
  }, [slug]);

  const options = useMemo(
    () => ({
      renderMark: {
        [MARKS.BOLD]: (text) => <strong>{text}</strong>,
        [MARKS.ITALIC]: (text) => <em>{text}</em>,
        [MARKS.CODE]: (text) => (
          <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">
            {text}
          </code>
        ),
      },

      renderNode: {
        [BLOCKS.PARAGRAPH]: (_node, children) => (
          <p className="mb-4">{children}</p>
        ),
        [BLOCKS.UL_LIST]: (_node, children) => (
          <ul className="list-disc pl-5 mb-4">{children}</ul>
        ),
        [BLOCKS.LIST_ITEM]: (_node, children) => (
          <li className="mb-2">{children}</li>
        ),
        [BLOCKS.HEADING_3]: (_node, children) => (
          <h3 className="text-lg font-semibold my-2">{children}</h3>
        ),
        [INLINES.CODE]: (node) => (
          <code className="bg-gray-800 text-white px-1 rounded">
            {node.value}
          </code>
        ),
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
          const { code, language } = node.data.target.fields;
          return (
            <SyntaxHighlighter language={language} style={atomOneLight}>
              {code}
            </SyntaxHighlighter>
          );
        },
        [BLOCKS.HEADING_2]: (node, children) => (
          <h2 className="text-2xl font-bold mt-6 mb-2">{children}</h2>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { file, title } = node.data.target.fields;
          return (
            <img
              src={file.url}
              alt={title}
              className="w-full my-6 rounded-md shadow"
            />
          );
        },
        [BLOCKS.CODE]: (node) => {
          const language = node.data?.language || "plaintext";
          const code = node.content?.[0]?.value || "";
          return (
            <SyntaxHighlighter language={language} style={atomOneLight}>
              {code}
            </SyntaxHighlighter>
          );
        },
        [INLINES.HYPERLINK]: (node, children) => (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {children}
          </a>
        ),
      },
    }),
    []
  );

  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  if (!blog) return <p className="text-center mt-10">Loading...</p>;

  const { title, excerpt, content, thumbnail, publishedDate, authorName } =
    blog.fields;

  const imageUrl = thumbnail?.fields?.file?.url ?? "/fallback-image.jpg";
  const excerptText = excerpt ?? "";

  return (
    <section className="py-24 px-4 sm:px-8 md:px-16 max-w-4xl mx-auto w-full lg:w-[80%] lg:px-2">
      <h1 className="text-4xl font-bold mb-4 text-left text-[#f0e5e5]">
        {title}
      </h1>
      <p className="text-md text-gray-500 dark:text-gray-400 text-left">
        {authorName} •{" "}
        {new Date(publishedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="text-lg text-gray-800 dark:text-gray-200 whitespace-pre-line py-8">
        {excerptText}
      </p>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto rounded-lg mb-6 pb-3"
      />
      <div className="prose dark:prose-invert max-w-none whitespace-pre-line">
        {content && documentToReactComponents(content, options)}
      </div>
    </section>
  );
};

export default BlogDetail;
