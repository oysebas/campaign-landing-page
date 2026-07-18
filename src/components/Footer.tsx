export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-canvas border-t border-white/5 py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-text-secondary">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
            <span className="font-serif text-sm tracking-normal text-text-primary font-medium">
              CampaignOS
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="text-center font-sans">
            Copyright &copy; {currentYear} CampaignOS. All Rights Reserved.
          </div>

          {/* Right: Legal Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-text-primary transition-colors duration-200">
              Terms and Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
