import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 hover:bg-[#d4af37]/20 transition-colors flex items-center justify-center"
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-[#d4af37]" />
      ) : (
        <Moon className="w-5 h-5 text-[#d4af37]" />
      )}
    </button>
  );
}
