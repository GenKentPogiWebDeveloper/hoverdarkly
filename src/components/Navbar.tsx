import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-accent-dark/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/89089f36-d6dc-44ac-bf3a-f98d2433f78a.png" alt="SkillSwap Logo" className="h-8" />
          <span className="text-xl font-bold text-violet-900 drop-shadow-[0_0_35px_rgba(139,92,246,0.5)]">SKILLSWAP</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/services" className="nav-link">SERVICES</Link>
          <Link to="/info" className="nav-link">INFO</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}