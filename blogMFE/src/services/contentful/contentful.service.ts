import { createClient } from 'contentful';
import { mapBlogPost, mapBlogPosts } from './mappers/blogPost.mapper';
import { mapBanner } from './mappers/banner.mapper';
import type { BlogPost } from '@/models/blog.model';
import type { Banner } from '@/models/banner.model';

if (
  !import.meta.env.VITE_CONTENTFUL_SPACE_ID ||
  !import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
) {
  throw new Error('Missing Contentful credentials');
}

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const CONTENT_TYPE_ID = '5bwcKYAqwgquiaHfBsUm0b';

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const response = await client.getEntries({
    content_type: CONTENT_TYPE_ID,
    'fields.slug': slug,
    limit: 1,
  });

  if (!response.items.length) {
    throw new Error('Blog post not found');
  }

  return mapBlogPost(response.items[0]);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await client.getEntries({
    content_type: CONTENT_TYPE_ID,
  });

  return mapBlogPosts(response.items);
}

export async function getBanner(): Promise<Banner | null> {
  const response = await client.getEntries({
    content_type: 'DaUCZCL9a2l2I0tvT7ntT',
    limit: 1,
  });

  if (!response.items.length) {
    return null;
  }

  return mapBanner(response.items[0]);
}
