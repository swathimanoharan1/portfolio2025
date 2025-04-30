import { useEffect, useState } from "react";
import client from "../hooks/contentfulClient";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost", order: "-fields.publishedDate" })
      .then((response) => {
        setBlogs(response.items);
      });
  }, []);

  return (
    <section className="py-24 pb-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold mb-6 text-center">All Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 px-60">
        {blogs.map((blog) => (
          <Link to={`/blogs/${blog.fields.slug}`} key={blog.sys.id}>
            <div className="bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md transition hover:shadow-lg">
              {blog.fields.thumbnail?.fields.file.url && (
                <img
                  src={blog.fields.thumbnail.fields.file.url}
                  alt={blog.fields.title}
                  className="w-full h-60 object-cover"
                />
              )}

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">
                  {blog.fields.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {blog.fields.authorImage?.fields.file.url && (
                      <img
                        src={blog.fields.authorImage.fields.file.url}
                        alt={blog.fields.authorName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    )}
                    <span className="text-sm text-gray-300 dark:text-slate-300">
                      {blog.fields.authorName}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 dark:text-slate-300">
                    {new Date(blog.fields.publishedDate).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
