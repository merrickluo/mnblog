const { Feed } = require("feed");
const matter = require("gray-matter");
const fs = require("fs");
const path = require("path");

// Rewrite this because stupid nodejs does not work well with es module.
function getSortedPostsData() {
  // Get file names under /posts
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  let allPostsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const slug = fileName.replace(/\.html$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const result = matter(fileContents);
    return { ...result.data, slug, content: result.content };
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

const feed = new Feed({
  title: "Node 13",
  link: "https://merrick.luois.me",
  description: "All Posts in Node 13",
  language: "en",
  favicon: "https://merrick.luois.me/favicon.ico",
  updated: new Date(),
});

getSortedPostsData().forEach((post) => {
  const url = `https://merrick.luois.me/posts/${post.slug}`;
  // fetch again since getSortedPostsData only contains metadata
  feed.addItem({
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content: post.content,
    date: post.date,
  });
});

fs.writeFileSync("out/posts/feed.xml", feed.rss2());
