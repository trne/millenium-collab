import React from 'react';
import '@/index.css';
import { getBlogPosts } from '@/services/contentful/contentful.service';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const BlogScreen = () => {
  const navigate = useNavigate();
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts,
  });

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-[400px]"
        data-testid="loading-spinner"
      >
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-destructive">
        <p>Error loading blog posts. Please try again later.</p>
      </div>
    );
  }

  const handleReadMore = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate programmatically to avoid issues with nested routes
    navigate(`/${slug}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Latest Blog Posts</h1>
        <p className="mt-4 text-lg text-gray-500">
          Explore our latest articles and tutorials
        </p>
      </div>
      <div className="grid gap-8">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow"
          >
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="aspect-video sm:aspect-[4/3] relative">
                <img
                  src={post.coverImage.url}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col p-6 sm:p-0 sm:pr-6">
                <div className="p-0">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
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
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-gray-500">
                    {post.description}
                  </p>
                </div>
                <div className="p-0 mt-4">
                  <a
                    href={`/${post.slug}`}
                    onClick={(e) => handleReadMore(post.slug, e)}
                    className="inline-flex items-center text-blue-600 font-medium hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};