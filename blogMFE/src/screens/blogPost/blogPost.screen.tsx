import React from 'react';
import '@/index.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBlogPost } from '@/services/contentful/contentful.service';
import { Loader2, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export const BlogPostScreen = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => getBlogPost(slug || ''),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center text-destructive">
        <p>Error loading blog post. Please try again later.</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 text-blue-600 hover:underline"
        >
          Return to blog
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-darkgreen">
      <button 
        onClick={() => navigate('/')}
        className="mb-8 flex items-center gap-2 text-blue-600 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all posts
      </button>
      
      <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden">
        <img
          src={post.coverImage.url}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-4xl font-bold mb-6 text-white">{post.title}</h1>

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <span>{post.author}</span>
        <span>•</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
      
      <div className="text-xl mb-8 prose prose-lg prose-invert">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw]}
        >
          {post.description}
        </ReactMarkdown>
      </div>
      
      <div className="prose prose-lg prose-invert max-w-none pb-8">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};