import { Button } from '@/components/baseUi/button/button.component';
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
     <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-background text-foreground">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-8">
          Welcome to {import.meta.env.VITE_APP_NAME}
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Experience the future of web development with our modern, eco-friendly platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-4 border border-primary text-primary rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};