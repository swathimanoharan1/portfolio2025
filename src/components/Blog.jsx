import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../hooks/contentfulClient";

const BlogPreviewSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost", order: "-fields.publishedDate" })
      .then((response) => {
        setBlogs(response.items.slice(0, 2));
      });
  }, []);

  return (
    <div>
      <section
        id="blog"
        className="py-16 text-center bg-black text-white relative"
      >
        <h2 className="text-4xl font-semibold mb-4">My Blogs</h2>
        <div className="w-20 h-0.5 mx-auto bg-red-500 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-60 pt-10">
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.fields.slug}`} key={blog.sys.id}>
              <div
                key={blog.sys.id}
                className="w-full bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden border border-red-500 shadow-lg shadow-red-500/50 transition hover:shadow-xl"
              >
                {blog.fields.thumbnail?.fields.file.url && (
                  <img
                    src={
                      blog.fields.thumbnail.fields.file.url ||
                      "/default-thumb.jpg"
                    }
                    loading="lazy"
                    alt={blog.fields.title}
                    className="w-full h-60 object-cover"
                  />
                )}

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
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

        <div className="text-center mt-8">
          <Link
            to="/blogs"
            className="inline-block mt-10 px-5 py-2 text-sm bg-gradient-to-r from-[#453634] to-[#D93D22] text-white rounded-full hover:opacity-90 transform transition duration-300 hover:scale-110"
          >
            View All Blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPreviewSection;
