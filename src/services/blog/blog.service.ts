import { BlogPost } from '@/models/blog.model';

export class BlogService {
  private static instance: BlogService;
  private baseUrl: string;

  private constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL;
  }

  public static getInstance(): BlogService {
    if (!BlogService.instance) {
      BlogService.instance = new BlogService();
    }
    return BlogService.instance;
  }

  async getPosts(): Promise<BlogPost[]> {
    const response = await fetch(`${this.baseUrl}/posts`);
    return response.json();
  }
}