import rss from '@astrojs/rss';
import { getPublishedPosts, postUrl } from '../utils/blog';
import { siteConfig } from '../config';

export async function GET(context: { site: URL }) {
  const posts = await getPublishedPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postUrl(post),
    })),
  });
}
