import { ArrowRight, Star, Trophy, Sparkles, Heart, Zap } from 'lucide-react';
import { APP_SIGNUP_URL } from '../config';

export default function BetaAccess() {

  const accolades = [
    {
      icon: Trophy,
      title: 'Leader',
      stars: 5,
      cohort: 'Beta Cohort 2026',
    },
    {
      icon: Heart,
      title: 'Best Relationship',
      stars: 5,
      cohort: 'Beta Cohort 2026',
    },
    {
      icon: Sparkles,
      title: 'Best Usability',
      stars: 5,
      cohort: 'Beta Cohort 2026',
    },
    {
      icon: Zap,
      title: 'Best Campaign Tool',
      stars: 5,
      cohort: 'Beta Cohort 2026',
    },
  ];

  return (
    <section id="beta-program" className="py-20 md:py-32 bg-section-alt relative overflow-hidden">
      {/* Ambient background glow matching the brand style */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-blue opacity-5 blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subheading and Form */}
          <div className="lg:col-span-6 space-y-8 text-left reveal-on-scroll">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-text-primary font-normal leading-[1.1] tracking-wide">
              Upgrade your email workflow with CampaignOS
            </h2>
            <p className="text-sm sm:text-base text-text-secondary/80 leading-relaxed max-w-md">
              100% free to use during private beta. No credit card required. Admitting exactly 50 active storefronts.
            </p>

            {/* Application Form */}
            <div className="max-w-md w-full">
              <a
                href={APP_SIGNUP_URL}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-button bg-accent-blue hover:bg-accent-blue-hover text-text-primary font-semibold text-sm btn-active-scale"
              >
                Get Started for FREE
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Accolade Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {accolades.map((acc, idx) => {
              const Icon = acc.icon;
              return (
                <div
                  key={idx}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                  className="reveal-on-scroll p-5 sm:p-6 rounded-card bg-card-bg border border-white/5 flex flex-col items-center text-center relative overflow-hidden group hover:border-accent-blue/30 transition-colors duration-300 cursor-pointer"
                >
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-accent-blue/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="transition-transform duration-300 ease-[var(--ease-out-quart)] group-hover:-translate-y-1 will-change-transform flex flex-col items-center">
                    {/* Circular Icon */}
                    <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 transition-transform duration-300 ease-[var(--ease-out-quart)] group-hover:scale-105 will-change-transform">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>

                    {/* Accolade Title */}
                    <h3 className="text-xs sm:text-sm font-semibold text-text-primary mb-2 uppercase tracking-wider">
                      {acc.title}
                    </h3>

                    {/* 5 Stars */}
                    <div className="flex space-x-0.5 mb-3 text-accent-blue">
                      {[...Array(acc.stars)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    {/* Cohort */}
                    <span className="text-[10px] text-text-secondary/40 uppercase tracking-widest font-mono">
                      {acc.cohort}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
