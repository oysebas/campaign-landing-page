import { Sparkles, ArrowDown, Check, AlertCircle } from 'lucide-react';

export default function SolutionComparison() {
  const metrics = [
    { value: '93%', label: 'Less setup time' },
    { value: '4.2x', label: 'Higher flow conversion' },
    { value: '24h', label: 'Store onboarding' },
    { value: '50', label: 'Beta slots capped' },
  ];

  const beforeBullets = [
    'Scattered Google Sheets and Notion docs',
    'Vague AI prompts that miss the brand voice',
    'Disjointed single-email copywriting',
    'Overlapping sequences that spam customers',
  ];

  const withBullets = [
    'Central campaign strategy dashboard',
    'Pre-set psychological persuasion states',
    'Sequenced multi-email copy generators',
    'Cohesive scheduling coordinates',
  ];

  return (
    <section id="solution" className="py-20 md:py-32 bg-section-alt border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headings, Paragraph and Metrics */}
          <div className="lg:col-span-6 space-y-8 text-left reveal-on-scroll">
            {/* Pill/Badge */}
            <div className="inline-flex items-center space-x-2">
              <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-text-secondary bg-card-bg border border-white/5 rounded-tag flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
                The Solution
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight font-normal">
              One workflow. <br />
              <span className="text-accent-blue">Coordinated results.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
              CampaignOS unites copywriting strategy, audience positioning, and brand assets in a single serene workspace. Coordinate high-converting DTC email flows without the chaos of fragmented tools.
            </p>

            {/* Metrics 2x2 Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-4">
              {metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1 group/metric cursor-default">
                  <div className="font-serif text-3xl sm:text-4xl text-accent-blue font-normal transition-transform duration-300 ease-[var(--ease-out-quart)] group-hover/metric:scale-[1.05] origin-left will-change-transform">
                    {metric.value}
                  </div>
                  <div className="text-xs text-text-secondary/60 uppercase tracking-wider font-semibold font-sans">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Before vs With Comparison Cards */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-4">
            
            {/* "Before" Card */}
            <div 
              style={{ transitionDelay: '150ms' }}
              className="reveal-on-scroll w-full p-6 sm:p-8 rounded-card bg-[#0c0c0c]/40 border border-white/5 text-left transition-colors duration-200 hover:border-white/10"
            >
              <div className="flex items-center space-x-2.5 mb-5">
                <div className="w-2 h-2 rounded-full bg-text-secondary/40" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">Before CampaignOS</h3>
              </div>
              <ul className="space-y-3">
                {beforeBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-text-secondary/75">
                    <AlertCircle className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connector Arrow */}
            <div className="w-8 h-8 rounded-full bg-card-bg border border-white/5 flex items-center justify-center transition-colors duration-300 hover:border-accent-blue/30">
              <ArrowDown className="w-4 h-4 text-accent-blue" />
            </div>

            {/* "With" Card */}
            <div 
              style={{ transitionDelay: '300ms' }}
              className="reveal-on-scroll w-full p-6 sm:p-8 rounded-card bg-card-bg border border-accent-blue/30 text-left relative overflow-hidden group cursor-pointer transition-all duration-300 hover:border-accent-blue/50"
            >
              {/* Subtle top corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-blue opacity-5 blur-2xl pointer-events-none group-hover:opacity-15 transition-opacity duration-300" />
              
              <div className="flex items-center space-x-2.5 mb-5">
                <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-blue">With CampaignOS</h3>
              </div>
              <ul className="space-y-3">
                {withBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                    <Check className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
