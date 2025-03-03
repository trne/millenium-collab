import type { Entry } from 'contentful';
import type { BlogPost } from '@/models/blog.model';

// @ts-ignore
interface ContentfulBlogPost {
  sys: {
    id: string;
    createdAt: string;
  };
  contentTypeId: string; // Add this line
  fields: {
    title: string;
    slug: string;
    description: string;
    content: string;
    author: string;
    coverImage?: {
      fields?: {
        file?: {
          url?: string;
        };
      };
    };
  };
}

export function mapBlogPost(entry: any): BlogPost {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    description: entry.fields.description,
    content: entry.fields.content,
    author: entry.fields.author,
    date: entry.sys.createdAt,
    coverImage: {
      url: entry.fields.coverImage?.fields?.file?.url
        ? `https:${entry.fields.coverImage.fields.file.url}`
        : 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    },
  };
}

export function mapBlogPosts(entries: Entry<any>[]): BlogPost[] {
  return entries.map(mapBlogPost);
}
