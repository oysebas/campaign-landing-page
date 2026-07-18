import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Beta Program', href: '#beta-program' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1000px]">
      <nav className="w-full bg-[#242424]/80 backdrop-blur-md border border-white/[0.06] rounded-full py-4 px-8 flex items-center justify-between shadow-lg">
        {/* Left - Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#" className="font-serif text-xl tracking-normal text-text-primary font-medium flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
            CampaignOS
          </a>
        </div>

        {/* Center - Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-wider font-semibold text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right - CTA (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#beta-program"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-button text-xs font-semibold uppercase tracking-wider bg-accent-blue hover:bg-accent-blue-hover text-text-primary transition-all duration-200 animate-none"
          >
            Get Started for FREE
            <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-[#242424]/50 focus:outline-none transition-colors duration-200"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2 border border-white/[0.06] bg-[#242424]/95 backdrop-blur-md rounded-2xl shadow-lg ${
          isOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-text-secondary hover:text-text-primary py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#beta-program"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full px-5 py-3 rounded-button text-xs font-semibold uppercase tracking-wider bg-accent-blue hover:bg-accent-blue-hover text-text-primary transition-all duration-200"
          >
            Get Started for FREE
          </a>
        </div>
      </div>
    </div>
  );
}
