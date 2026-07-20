import { Compass, BookOpen, Layers } from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: Compass,
      title: 'Strategy Mapping',
      description: 'Define exact angles and audience mindset before writing a single word. Align each campaign with clear outcomes like brand affinity or immediate purchase intent.',
    },
    {
      icon: BookOpen,
      title: 'Persuasion Formulas',
      description: 'Choose from structured, tested copywriting frameworks rather than open-ended text prompts. Build sequences designed to guide readers logically toward actions.',
    },
    {
      icon: Layers,
      title: 'Unified Flow Coordination',
      description: 'Keep all strategies, email formats, and copywriting structured in one single canvas. Avoid fragmented notes and maintain absolute consistency across campaigns.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-dark-canvas relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Centered Pill/Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-text-secondary bg-card-bg border border-white/5 rounded-tag">
            Take Full Control of Your Campaigns
          </span>
        </div>

        {/* Centered Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary font-normal leading-tight">
            Campaign <span className="text-accent-blue">Orchestration</span>
          </h2>
        </div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featureList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                style={{ transitionDelay: `${idx * 150}ms` }}
                className="reveal-on-scroll relative p-6 sm:p-8 rounded-card bg-card-bg border border-white/5 flex flex-col justify-between transition-colors duration-300 hover:border-accent-blue/30 group overflow-hidden cursor-pointer"
              >
                <div className="transition-transform duration-300 ease-[var(--ease-out-quart)] group-hover:-translate-y-1 will-change-transform">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-button bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 transition-transform duration-300 ease-[var(--ease-out-quart)] group-hover:scale-105 will-change-transform">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-text-primary font-normal mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
