import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-accent-dark/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/125ebe26-d971-4549-94e4-a3771afd9096.png" alt="SkillSwap Logo" className="h-8" />
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