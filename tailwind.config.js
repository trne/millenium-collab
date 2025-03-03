/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#333333',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000',
        },
        primary: {
          DEFAULT: '#009A49',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FFDD00',
          foreground: '#000000',
        },
        muted: {
          DEFAULT: '#F2F2F2',
          foreground: '#666666',
        },
        accent: {
          DEFAULT: '#FFDD00',
          foreground: '#000000',
        },
        success: {
          DEFAULT: '#10B981',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        border: '#E5E5E5',
        input: '#E5E5E5',
        ring: '#009A49',
        chart: {
          1: '#009A49',
          2: '#26C07D',
          3: '#4AE3AD',
          4: '#A5F0D3',
          5: '#DFFBF0',
        },
        darkgreen: '#1b1d1b',
        surface: {
          DEFAULT: '#F2F2F2',
          foreground: '#333333',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
        }
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif'
        ],
      },
      boxShadow: {
        'soft': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};