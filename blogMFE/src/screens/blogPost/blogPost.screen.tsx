import React from 'react';
import '@/index.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBlogPost } from '@/services/contentful/contentful.service';
import { Loader2, ArrowLeft } from 'lucide-react';

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
    <div className="max-w-4xl mx-auto">
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
      
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-xl text-gray-700 mb-8">{post.description}</p>
      
      <div className="prose prose-lg max-w-none">
        {post.content.split('\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};