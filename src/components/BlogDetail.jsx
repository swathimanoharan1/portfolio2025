import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../hooks/contentfulClient";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blogPost",
        "fields.slug": slug,
        limit: 1,
      })
      .then((response) => {
        setBlog(response.items[0]);
      });
  }, [slug]);

  if (!blog) return <p className="text-center mt-10">Loading...</p>;

  const { title, excerpt, content, thumbnail, publishedDate, authorName } =
    blog.fields;

  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => (
        <SyntaxHighlighter language="csharp" style={atomOneLight}>
          {text}
        </SyntaxHighlighter>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4 text-gray-800 dark:text-gray-200">{children}</p>
      ),
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
  };

  return (
    <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
      <img
        src={thumbnail.fields.file.url}
        alt={title}
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-800 dark:text-gray-200 whitespace-pre-line">
        {excerpt}
      </p>
      <div className="prose dark:prose-invert max-w-none">
        {documentToReactComponents(content, options)}
      </div>
      <p className="text-md text-gray-500 dark:text-gray-400 mb-4 text-center">
        {authorName} • {new Date(publishedDate).toLocaleDateString()}
      </p>
    </section>
  );
};

export default BlogDetail;
