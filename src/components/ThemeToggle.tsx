'use client';

import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

/* export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="inline-flex items-center rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-200"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  ); */
  export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, after the initial HTML hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      className="inline-flex items-center rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-200"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {/* 
        Only render the icon once mounted on the client. 
        Render a hidden or sizing placeholder before mounting 
        so the button dimensions don't jump when it loads.
      */}
      {mounted ? (
        isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />
      ) : (
        <span className="h-6 w-6 block" />
      )}
    </button>
  );

}