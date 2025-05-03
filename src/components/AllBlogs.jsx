import { useEffect, useState } from "react";
import client from "../hooks/contentfulClient";
import { Link } from "react-router-dom";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost", order: "-fields.publishedDate" })
      .then((response) => {
        setBlogs(response.items);

        const categories = new Set();
        response.items.forEach((item) => {
          if (item.fields.category) {
            categories.add(item.fields.category);
          }
        });

        setCategoryOptions([...categories]);
      });
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const title = blog.fields.title?.toLowerCase() || "";
    const content = blog.fields.content
      ? documentToPlainTextString(blog.fields.content).toLowerCase()
      : "";
    const category = blog.fields.category || "";

    const matchesSearch =
      title.includes(searchTerm.toLowerCase()) ||
      content.includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="allBlogs"
      className="py-24 pb-10 px-4 sm:px-8 md:px-16 lg:px-24 "
    >
      <h2 className="text-3xl font-bold mb-6 text-center">All Blog Posts</h2>
      <div className="text-center mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 p-[2px] rounded-md w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-md focus:outline-none text-white bg-white dark:bg-[#1e1e1e]"
          />
        </div>
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 p-[2px] rounded-md">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-md focus:outline-none text-white bg-white dark:bg-[#1e1e1e]"
          >
            <option value="">All Categories</option>
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredBlogs.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No blogs found</p>
      ) : (
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-8">
          {filteredBlogs.map((blog) => (
            <Link to={`/blogs/${blog.fields.slug}`} key={blog.sys.id}>
              <div className="w-full h-[500px] flex flex-col bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg shadow-slate-500/50 transition hover:shadow-xl">
                {/* Thumbnail: Fixed height */}
                {blog.fields.thumbnail?.fields.file.url && (
                  <img
                    src={blog.fields.thumbnail.fields.file.url}
                    alt={blog.fields.title}
                    className="w-full h-60 object-cover"
                  />
                )}

                {/* Content */}
                <div className="flex flex-col justify-between p-4">
                  {/* Title & Excerpt: Fixed height sections */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-1 ">
                      {blog.fields.title}
                    </h3>
                    <p className="text-sm text-[#d1d1d1] mb-4 line-clamp-3">
                      {blog.fields.excerpt}
                    </p>
                  </div>

                  {/* Footer: Author and Date aligned at bottom */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 mt-2">
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
                    <p className="text-sm text-gray-300 dark:text-slate-300 mt-2">
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
      )}
    </section>
  );
};

export default AllBlogs;
