import { ShieldCheck, FileCheck, CheckCircle2, Lock, Target } from 'lucide-react';

export default function TrustBuilding() {
  return (
    <section id="trust" className="py-20 md:py-32 bg-dark-canvas border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Centered Pill/Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-text-secondary bg-card-bg border border-white/5 rounded-tag flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-blue" />
            Trust & Security
          </span>
        </div>

        {/* Centered Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary font-normal leading-tight">
            Built for enterprise-grade <span className="text-accent-blue">reliability</span>
          </h2>
        </div>

        {/* 3-Column Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Data Sovereignty */}
          <div className="p-6 sm:p-8 rounded-card bg-card-bg border border-white/5 flex flex-col justify-between transition-colors duration-300 hover:border-accent-blue/20 group relative">
            <div>
              {/* Icon */}
              <div className="w-10 h-10 rounded-button bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6">
                <Lock className="w-5 h-5" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg text-text-primary font-normal mb-3">
                Absolute data sovereignty.
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-8">
                Your store analytics and customer data are fully encrypted. We never train public artificial intelligence models on your proprietary information.
              </p>
            </div>

            {/* Infographic Mockup */}
            <div className="w-full bg-dark-canvas border border-white/5 rounded-lg p-4 font-mono text-[10px] space-y-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-text-secondary font-semibold">DATA PRIVACY STATUS</span>
                <span className="text-accent-blue font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                  SECURED
                </span>
              </div>
              <div className="space-y-1.5 text-text-primary">
                <div className="flex justify-between bg-card-bg/50 p-1.5 rounded border border-white/5">
                  <span className="text-text-secondary">Customer List</span>
                  <span>AES-256 Encrypted</span>
                </div>
                <div className="flex justify-between bg-card-bg/50 p-1.5 rounded border border-white/5">
                  <span className="text-text-secondary">Model Training</span>
                  <span className="text-accent-blue font-semibold">Strictly Excluded</span>
                </div>
                <div className="flex justify-between bg-card-bg/50 p-1.5 rounded border border-white/5">
                  <span className="text-text-secondary">API Connections</span>
                  <span>SSL/TLS Encrypted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Brand Guardrails */}
          <div className="p-6 sm:p-8 rounded-card bg-card-bg border border-white/5 flex flex-col justify-between transition-colors duration-300 hover:border-accent-blue/20 group relative">
            <div>
              {/* Icon */}
              <div className="w-10 h-10 rounded-button bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6">
                <FileCheck className="w-5 h-5" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg text-text-primary font-normal mb-3">
                Zero hallucination guarantee.
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-8">
                Generate email copy locked strictly to your uploaded specs, brand guidelines, and factual ingredients. CampaignOS never invents features.
              </p>
            </div>

            {/* Infographic Mockup */}
            <div className="w-full bg-dark-canvas border border-white/5 rounded-lg p-4 font-mono text-[10px] space-y-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-text-secondary font-semibold">GUARDRAIL VERIFICATION</span>
                <span className="text-text-primary font-bold flex items-center gap-1">
                  ACTIVE
                </span>
              </div>
              <div className="space-y-1.5 text-text-primary">
                <div className="flex items-center space-x-2 bg-card-bg/50 p-1.5 rounded border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                  <span className="truncate">Sourcing facts confirmed</span>
                </div>
                <div className="flex items-center space-x-2 bg-card-bg/50 p-1.5 rounded border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                  <span className="truncate">No external claims allowed</span>
                </div>
                <div className="flex items-center space-x-2 bg-card-bg/50 p-1.5 rounded border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                  <span className="truncate">Grounded context enforced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Conversion Framework Alignment */}
          <div className="p-6 sm:p-8 rounded-card bg-card-bg border border-white/5 flex flex-col justify-between transition-colors duration-300 hover:border-accent-blue/20 group relative">
            <div>
              {/* Icon */}
              <div className="w-10 h-10 rounded-button bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6">
                <Target className="w-5 h-5" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg text-text-primary font-normal mb-3">
                Conversion-framework alignment.
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-8">
                Every sequence is built on proven persuasion frameworks like PAS and AIDA. Deploy targeted, psychological copy structured specifically to drive opens, clicks, and store revenue.
              </p>
            </div>

            {/* Infographic Mockup */}
            <div className="w-full bg-dark-canvas border border-white/5 rounded-lg p-4 font-mono text-[10px] space-y-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-text-secondary font-semibold">COPY MODEL: PAS</span>
                <span className="text-accent-blue font-bold">100% ALIGNED</span>
              </div>
              <div className="space-y-1.5 text-text-primary">
                <div className="flex items-center space-x-2 bg-card-bg/50 p-1.5 rounded border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-primary/30" />
                  <span className="text-text-secondary uppercase font-semibold text-[8px] tracking-wider w-8">Pain</span>
                  <span className="truncate">Identify primary customer pain point</span>
                </div>
                <div className="flex items-center space-x-2 bg-card-bg/50 p-1.5 rounded border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-primary/30" />
                  <span className="text-text-secondary uppercase font-semibold text-[8px] tracking-wider w-8">Agitate</span>
                  <span className="truncate">Magnify impact of ignoring problem</span>
                </div>
                <div className="flex items-center space-x-2 bg-card-bg/50 p-1.5 rounded border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-primary/30" />
                  <span className="text-text-secondary uppercase font-semibold text-[8px] tracking-wider w-8">Solve</span>
                  <span className="truncate">Introduce product as ultimate relief</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
