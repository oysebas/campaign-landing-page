import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'What is CampaignOS?',
      answer: 'CampaignOS is a campaign coordinator designed specifically for e-commerce storefronts. It guides you from mapping customer psychology to building cohesive copywriting flows.',
    },
    {
      question: 'How does the generation process work?',
      answer: 'Instead of relying on open-ended prompts, CampaignOS uses structured strategic angles and persuasion states to ensure generated email sequences match your exact brand voice.',
    },
    {
      question: 'Can I integrate my Shopify store?',
      answer: 'Not currently. A direct Shopify integration is coming very soon. In the meantime, you can easily generate and copy your structured campaigns directly into your existing email marketing platform.',
    },
    {
      question: 'Why is membership capped at 50 users?',
      answer: 'This limit is only because we are currently in our private beta phase. Capping the cohort size allows us to provide dedicated onboarding assistance and refine the product alongside our early members.',
    },
    {
      question: 'Is it really 100% free during the private beta?',
      answer: 'Yes. Selected storefronts get full access to all features without charge. We only ask for honest feedback to help refine the system.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-dark-canvas border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-text-secondary bg-card-bg border border-white/5 rounded-tag flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-accent-blue" />
              Information
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary font-normal leading-tight">
            Frequently Asked <span className="text-accent-blue">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {faqItems.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className={`reveal-on-scroll rounded-card border transition-colors duration-200 overflow-hidden cursor-pointer ${
                  isExpanded
                    ? 'bg-card-bg border-accent-blue/40 text-text-primary'
                    : 'bg-dark-canvas border-white/10 text-text-secondary hover:text-text-primary hover:border-white/20'
                }`}
              >
                {/* Accordion Trigger */}
                <div className="flex items-center justify-between p-5 sm:p-6 text-sm sm:text-base font-medium">
                  <span className={isExpanded ? 'text-text-primary font-semibold' : ''}>{item.question}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-accent-blue flex-shrink-0 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0 transition-transform duration-200" />
                  )}
                </div>

                {/* Accordion Content */}
                <div className={`accordion-content ${isExpanded ? 'is-open border-t border-white/5' : ''}`}>
                  <div className="overflow-hidden min-h-0">
                    <p className="p-5 sm:p-6 text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
