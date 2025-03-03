import { BlogPost } from '@/models/blog.model';

export const mapBlogResponse = (response: any): BlogPost => ({
  id: response.id,
  title: response.title,
  content: response.content,
  author: response.author,
  createdAt: new Date(response.created_at).toISOString(),
});