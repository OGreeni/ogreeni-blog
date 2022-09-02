import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export const getSortedPostsData = () => {
  const filenames = fs.readdirSync(postsDir);

  const postsData = filenames.map((filename) => {
    // remove ".md" from filename to get id
    const id = filename.replace(/\.md$/, '');

    const fullPath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContents);

    return { id, ...matterResult.data } as {
      id: string;
      date: string;
      [key: string]: any;
    };
  });

  postsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return postsData;
};
