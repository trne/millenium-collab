import { FC, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from '@/components/shared/navigation/navigation.component';
import { Footer } from '@/components/shared/footer/footer.component';
import { Banner } from '@/components/shared/banner/banner.component';
import { trackEvent } from '@/services/tealium/tealium.service';
import { getBanner } from '@/services/contentful/contentful.service';
import type { LayoutProps } from './types.ts';

export const Layout: FC<LayoutProps> = () => {
  const location = useLocation();
  const { data: banner } = useQuery({
    queryKey: ['banner'],
    queryFn: getBanner,
  });

  // Track page views
  useEffect(() => {
    trackEvent('view', {
      page_type:
        location.pathname === '/' ? 'home' : location.pathname.slice(1),
      page_url: window.location.href,
    });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {banner?.show && (
        <Banner
          title={banner.title}
          description={banner.description}
          leftIcon={banner.leftIcon}
          rightIcon={banner.rightIcon}
        />
      )}
      <Navigation />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
