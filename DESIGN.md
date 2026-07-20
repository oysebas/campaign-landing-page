# CampaignOS — Premium Dark Mode Theme Style Reference
> Serene dark developer editorial

**Theme:** dark

CampaignOS uses a structured, dark-canvas editorial language. A deep charcoal-to-black canvas (#0c0c0c) creates a high-focus environment, while a sharp cobalt blue accent (#3651FF) highlights key interactions and progress states. Headline typography uses a custom-like serif (Fraunces) at large sizes (36px–72px) with comfortable, elegant tracking, contrasting against Inter for UI controls, code-like badges, and body copy. Depth is achieved flatly by overlaying grey containers (#242424) against the dark page canvas. Corners use 4px radii for buttons/inputs and 16px radii for cards/content blocks.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Dark Canvas | `#0c0c0c` | `--color-dark-canvas` | Main page canvas background, scrollbar track |
| Card Background | `#242424` | `--color-card-bg` | Primary elevated container surface, navigation pill, badges |
| Section Alt | `#161616` | `--color-section-alt` | Alternating full-width section bands for layout rhythm |
| Accent Blue | `#3651FF` | `--color-accent-blue` | Primary action fills, visual focal points, progress highlights |
| Accent Blue Hover | `#223ad9` | `--color-accent-blue-hover` | Hover state for cobalt blue filled actions |
| Text Primary | `#f3f3f3` | `--color-text-primary` | Main titles, primary button text, emphasized labels |
| Text Secondary | `#a1a1aa` | `--color-text-secondary` | Body paragraphs, secondary buttons, captions, inactive nav |
| Hairline Border | `rgba(243, 243, 243, 0.08)` | `--color-hairline-border` | Subtle dividing lines and card outlines |

## Tokens — Typography

### Serif (Fraunces)
- **Role:** Main hero, display section headlines, and step card titles.
- **Sizes:** 36px, 48px, 60px, 72px
- **Weights:** 400 (normal)
- **Line Heights:** 1.1 to 1.2
- **Substitutes:** Georgia, ui-serif, serif

### Sans-serif (Inter)
- **Role:** UI elements, navigational labels, body paragraphs, step numbers, captions.
- **Sizes:** 12px, 14px, 16px, 18px, 20px
- **Weights:** 400 (regular), 500 (medium), 600 (semibold)
- **Line Heights:** 1.3 to 1.5
- **Substitutes:** system-ui, sans-serif

## Tokens — Spacing & Shapes

- **Grid Base:** 4px (comfortable density)
- **Card Radius:** 16px (`rounded-card`)
- **Button / Input Radius:** 4px (`rounded-button`)

### Layout Constraints
- **Content Max-Width:** 1400px (desktop bounds)
- **Section Spacing:** 80px–128px vertical padding
- **Card Padding:** 24px–32px (spacious interior buffers)

## Core Components

### Display Serif Headline
Large display title utilizing Fraunces serif, 36px–72px, weight 400, leading-none, text-primary color. High contrast with blue-accented words for semantic focus.

### Accent Blue CTA Button
Filled button utilizing Accent Blue (#3651FF) background, Text Primary (#f3f3f3) text, 4px radius, weight 600 sans-serif, and responsive scale transitions.

### Ghost Outline Button
Transparent background, 1px hairline border, 4px radius, weight 600 sans-serif, Text Primary text. Subtle scaling on active click.

### Elevated Card
Background Card Background (#242424), 16px radius, hairline border, housing content, charts, or secondary form inputs. No drop shadows.
