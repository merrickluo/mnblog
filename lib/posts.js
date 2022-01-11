import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

// My posts's date metadata is messed up, convert them to one.
function sanitize(meta) {
  return {
    ...meta,
    date: meta.date.toISOString(), // Convert date to ISOString since next.js do not serialize date
    categories: meta.category.split(" "), // Categories exported from org mode is space sepearted string.
  };
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.html`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const contentHtml = matterResult.content;

  // Combine the data with the contentHtml
  return {
    contentHtml,
    ...sanitize(matterResult.data),
  };
}

export function getSortedPostsData({ category } = {}) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  let allPostsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const slug = fileName.replace(/\.html$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    return { ...sanitize(matter(fileContents).data), slug };
  });

  if (category) {
    allPostsData = allPostsData.filter((it) =>
      it.categories.includes(category)
    );
  }

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

export function getPostCategories() {
  return getSortedPostsData()
    .map((it) => it.categories)
    .flat()
    .reduce((v, it) => {
      if (v.includes(it)) {
        return v;
      } else {
        return [...v, it];
      }
    }, []);
}
