"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

function ThemeToggle() {
  // Get the theme toggler from the hook
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Returned JSX
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeToggle;
