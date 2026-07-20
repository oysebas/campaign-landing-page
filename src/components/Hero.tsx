import { ArrowRight, Zap, X } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [activeOption, setActiveOption] = useState<'single' | 'campaign' | 'flow'>('single');

  return (
    <section className="relative overflow-hidden bg-dark-canvas pt-36 md:pt-48 pb-0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10 flex flex-col items-center text-center">
        
        {/* Display Headline in Fraunces Serif */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-[1.1] tracking-wide font-normal max-w-5xl">
          Coordinate email campaigns. Live in minutes.
        </h1>

        {/* Paragraph Text */}
        <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-4xl mt-8 font-sans">
          CampaignOS replaces fragmented spreadsheets and disjointed tools. Orchestrate DTC email strategies, structure persuasion flows, and manage unified assets in one flat, serene canvas.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
          <a
            href="#beta-program"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-button bg-accent-blue hover:bg-accent-blue-hover text-text-primary font-semibold text-sm btn-active-scale"
          >
            Get Started for FREE
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-button bg-[#242424] hover:bg-[#323232] border border-white/10 text-text-primary font-semibold text-sm btn-active-scale"
          >
            Explore Features
          </a>
        </div>

        {/* Scarcity Badge */}
        <p className="mt-6 text-xs text-text-primary flex items-center gap-1.5 bg-[#242424] px-3.5 py-1.5 rounded-full border border-white/5 font-semibold">
          <Zap className="w-3.5 h-3.5 text-accent-blue fill-accent-blue/10" />
          Strictly limited to 50 active slots. 42 claimed, 8 remaining.
        </p>

        {/* CampaignOS Dashboard Mockup (Custom Dark theme) */}
        <div className="mt-16 w-full max-w-[1100px] border border-white/10 rounded-card bg-[#161616] overflow-hidden flex flex-col text-left transition-all duration-300 hover:border-white/20 hover:scale-[1.005] relative shadow-2xl ease-[var(--ease-out-quart)] will-change-transform">
          
          {/* Fading gradient overlay at the bottom fading to dark-canvas #0c0c0c */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-canvas via-dark-canvas/75 to-transparent pointer-events-none z-20" />
          
          {/* Top Notification Banner */}
          <div className="bg-accent-blue text-text-primary py-2.5 px-4 text-xs font-semibold flex justify-between items-center font-sans tracking-wide">
            <span className="flex items-center gap-2">
              <span className="bg-dark-canvas text-accent-blue text-[9px] px-1.5 py-0.5 rounded font-mono">NEW</span>
              Build your email your way. Pick exactly which blocks it includes, in the order you want.
            </span>
            <X className="w-4 h-4 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-150" />
          </div>

          {/* Navigation Bar */}
          <div className="bg-[#0c0c0c] border-b border-white/10 px-4 py-3 flex justify-between items-center text-xs">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-button bg-accent-blue flex items-center justify-center text-text-primary font-bold text-xs">C</div>
              <span className="font-serif text-sm text-text-primary font-medium">CampaignOS</span>
              <span className="text-[10px] text-text-secondary/50 font-mono">V0.1</span>
            </div>
            
            <div className="hidden sm:flex items-center space-x-6">
              <span className="text-text-primary font-medium border-b-2 border-accent-blue pb-1">New email</span>
              <span className="text-text-secondary/70 hover:text-text-primary cursor-pointer transition-colors duration-150">Brand info</span>
              <span className="text-text-secondary/70 hover:text-text-primary cursor-pointer transition-colors duration-150">Feedback</span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="font-mono text-[10.5px] text-text-secondary bg-[#242424] px-2.5 py-1 rounded border border-white/10 hidden md:inline-block">
                user@company.com
              </span>
              <span className="text-text-secondary/70 hover:text-text-primary cursor-pointer transition-colors duration-150">Sign out</span>
            </div>
          </div>

          {/* Workspace Body */}
          <div className="flex flex-1 flex-col md:flex-row min-h-[500px]">
            
            {/* Sidebar Workflow Panel */}
            <div className="w-full md:w-60 bg-[#0c0c0c]/50 border-r border-white/10 p-4 flex flex-col justify-between flex-shrink-0">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-semibold text-text-secondary/50 uppercase tracking-wider mb-3 px-1">Workflow</h4>
                  <div className="space-y-1">
                    {[
                      { num: '01', label: 'Send type', active: true },
                      { num: '02', label: 'Campaign setup' },
                      { num: '03', label: 'Audience' },
                      { num: '04', label: 'Emotional outcome' },
                      { num: '05', label: 'Strategic angle' },
                      { num: '06', label: 'Persuasion formula' },
                      { num: '07', label: 'Email format' },
                      { num: '08', label: 'Brand voice' },
                      { num: '09', label: 'Generate copy' }
                    ].map((step) => (
                      <div
                        key={step.num}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-button text-xs transition-colors duration-150 ${
                          step.active 
                            ? 'bg-[#242424] text-accent-blue font-medium border border-white/10' 
                            : 'text-text-secondary/60'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                          step.active ? 'bg-accent-blue text-text-primary font-bold' : 'bg-[#161616] text-text-secondary/40'
                        }`}>
                          {step.num}
                        </span>
                        <span className="truncate">{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Theme toggle in sidebar */}
              <div className="flex items-center space-x-2 border-t border-white/10 pt-4 mt-4">
                <div className="w-8 h-4 bg-[#161616] rounded-full p-0.5 cursor-pointer relative">
                  <div className="w-3 h-3 bg-accent-blue rounded-full absolute left-0.5 top-0.5" />
                </div>
                <span className="text-[10px] text-text-secondary/60 uppercase font-mono">Dark theme</span>
              </div>
            </div>

            {/* Main Editor Panel */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between bg-[#161616]/40">
              
              {/* Step Title bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-accent-blue/15 text-accent-blue rounded font-mono text-[9px] uppercase font-bold tracking-wider">
                    STEP 1 / 9
                  </span>
                  <span className="text-xs font-semibold text-text-primary">Send type</span>
                </div>
                <button className="text-xs text-text-secondary/60 hover:text-text-primary transition-colors duration-150">Reset</button>
              </div>

              {/* Active Step Panel */}
              <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-accent-blue uppercase tracking-wider">Send Type</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-text-primary font-normal">What are we building?</h3>
                  <p className="text-xs text-text-secondary/70 leading-relaxed">
                    Each shape behaves differently after the first email is generated.
                  </p>
                </div>

                {/* Option Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      id: 'single',
                      title: 'Single send',
                      desc: 'One email, sent once. Standalone announcement, update, or note.',
                      example: 'e.g. Back-in-stock • Newsletter • Founder note'
                    },
                    {
                      id: 'campaign',
                      title: 'Campaign',
                      desc: 'A linked sequence around one event, launch, sale, season. You control when each email lands.',
                      example: 'e.g. Product launch • Black Friday • Collection drop'
                    },
                    {
                      id: 'flow',
                      title: 'Flow',
                      desc: 'Triggered automation that fires on a customer action. Pre-defined structure per flow type.',
                      example: 'e.g. Welcome • Abandoned cart • Post-purchase'
                    }
                  ].map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setActiveOption(opt.id as any)}
                      className={`p-4 rounded-card border cursor-pointer transition-all duration-200 active:scale-[0.98] flex flex-col justify-between min-h-[140px] ${
                        activeOption === opt.id
                          ? 'bg-[#242424] border-accent-blue text-text-primary'
                          : 'bg-[#0c0c0c]/60 border-white/10 hover:border-white/20 text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      <div>
                        <h4 className="font-serif text-sm font-normal text-text-primary mb-1.5">{opt.title}</h4>
                        <p className="text-[11px] leading-relaxed mb-3">{opt.desc}</p>
                      </div>
                      <p className="text-[9.5px] font-mono text-text-secondary/40 mt-2 pt-2 border-t border-white/10">
                        {opt.example}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-8 text-xs">
                <span className="text-text-secondary/60">Complete this step to continue.</span>
                <button className="inline-flex items-center px-4 py-2 bg-accent-blue hover:bg-accent-blue-hover text-text-primary font-semibold rounded-button btn-active-scale">
                  Continue
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
