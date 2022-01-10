import fs from "fs";
import path from "path";
import matter from "gray-matter";
import toml from "toml";

const postsDirectory = path.join(process.cwd(), "posts");

function availableDate(meta) {
  return meta.date || meta.publishDate || meta.lastmod;
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, {
      language: "toml",
      delimiters: "+++",
      engines: {
        toml: toml.parse.bind(toml),
      },
    });

    // My posts's date metadata is messed up, convert them to one.
    const metadata = {
      ...matterResult.data,
      date: availableDate(matterResult.data),
      publishDate: null,
      lastmod: null,
    };

    // Combine the data with the id
    return { id, ...metadata, date: metadata.date.toISOString() };
  });

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
