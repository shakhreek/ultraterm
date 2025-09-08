import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved as 'light' | 'dark';
      // Use system preference as default
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // Only toggle the `dark` class; Tailwind's darkMode uses `.dark` on root.
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    // listen to system changes and update only if user hasn't explicitly set a preference
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem('theme');
      if (saved) return; // respect explicit user choice
      setTheme(e.matches ? 'dark' : 'light');
    };
    if (mq && mq.addEventListener) mq.addEventListener('change', handleChange);

    return () => {
      if (mq && mq.removeEventListener) mq.removeEventListener('change', handleChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    // When user toggles, persist explicit preference
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      // also ensure body gets updated for components/styles that target body
      if (typeof window !== 'undefined') {
        const root = window.document.documentElement;
        const body = window.document.body;
        if (next === 'dark') {
          root.classList.add('dark');
          body.classList.add('dark');
        } else {
          root.classList.remove('dark');
          body.classList.remove('dark');
        }
      }
      return next;
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* show Sun when current theme is light (so clicking goes dark) */}
      {theme === 'light' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};