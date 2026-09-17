---
name: "Gabriel Monutti Portfolio"
description: "A connected engineering log that makes shipped systems, integrations, and product work legible."
colors:
  paper-light: "#f7f7f5"
  surface-light: "#ffffff"
  surface-soft-light: "#efefeb"
  ink-light: "#171717"
  ink-secondary-light: "#5f625f"
  ink-muted-light: "#7c807c"
  line-light: "#d9dad4"
  line-strong-light: "#bfc2bc"
  accent-light: "#065f55"
  accent-soft-light: "#dfeeea"
  accent-contrast-light: "#f5fffc"
  selection-light: "#b7d9d2"
  paper-dark: "#111312"
  surface-dark: "#181b19"
  surface-soft-dark: "#202421"
  ink-dark: "#f2f2ef"
  ink-secondary-dark: "#aeb2ad"
  ink-muted-dark: "#828782"
  line-dark: "#2c312e"
  line-strong-dark: "#424944"
  accent-dark: "#65b8ac"
  accent-soft-dark: "#183b36"
  accent-contrast-dark: "#0d1715"
  selection-dark: "#285b53"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(3.5rem, 6.25vw, 5rem)"
    fontWeight: 580
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.75rem)"
    fontWeight: 520
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  action:
    fontFamily: "Geist, sans-serif"
    fontSize: "14px"
    fontWeight: 620
    lineHeight: 1.2
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.04em"
rounded:
  chip: "5px"
  compact: "6px"
  node: "7px"
  control: "8px"
  panel: "10px"
  system: "12px"
  visual: "14px"
  full: "50%"
spacing:
  xs: "6px"
  sm: "8px"
  md: "10px"
  lg: "14px"
  xl: "18px"
  2xl: "24px"
  3xl: "28px"
  4xl: "34px"
components:
  button-primary:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.accent-contrast-light}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "13px 18px"
  button-primary-dark:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.accent-contrast-dark}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "13px 18px"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.ink-light}"
    typography: "{typography.action}"
    padding: "0"
  technology-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary-light}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "6px 9px"
  technical-panel:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.system}"
  circular-control:
    backgroundColor: "transparent"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.full}"
    size: "42px"
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary-light}"
    typography: "{typography.action}"
    padding: "0"
  section-rule-header:
    backgroundColor: "transparent"
    textColor: "{colors.ink-light}"
    typography: "{typography.headline}"
    padding: "26px 0 0"
  status-register:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink-light}"
    rounded: "0"
    padding: "24px 34px"
---

# Design System: Gabriel Monutti Portfolio

## Overview

**Creative North Star: "The Connected Engineering Log"**

The portfolio is a warm, editorial systems record: calm paper, near-black ink, fine rules, and sparse teal signals organize real evidence without turning it into a résumé dashboard. Its density comes from traces, registers, system nodes, and large project chapters rather than generic cards or ornamental decoration.

The world combines a human reading rhythm with the precision of an observability viewer. Large Geist headlines state the story directly; Geist Mono appears only where content behaves like metadata, status, sequence, time, or machine output. Light and dark modes swap semantic roles without changing hierarchy, and real product imagery is framed as evidence inside authored technical compositions.

**Key Characteristics:**
- Asymmetric 7/5 desktop compositions that collapse into one clear reading column.
- Warm neutral surfaces structured by one-pixel rules and restrained tonal separation.
- Deep teal reserved for actions, active system nodes, status, and trace markers.
- Large variable-weight grotesk headlines paired with compact machine metadata.
- Real project imagery presented through booking, phone, window, and delivery-trace frames.
- Brief, purposeful motion with a complete reduced-motion fallback.

## Colors

The palette is semantic and theme-paired: warm paper and charcoal ink establish the reading field, while one deep teal signal family carries interaction and system state.

### Primary
- **Deep Teal Signal** (`accent-light`, `accent-dark`): Marks primary actions, active nodes, sequence indices, status indicators, focus outlines, and interactive emphasis. It is intentionally sparse.
- **Soft Teal Signal Field** (`accent-soft-light`, `accent-soft-dark`): Supports signal halos and quiet active-state fields without competing with the core accent.
- **Signal Contrast** (`accent-contrast-light`, `accent-contrast-dark`): Keeps copy legible when placed directly on the accent.

### Neutral
- **Warm Paper** (`paper-light`, `paper-dark`): The page-level reading field in each theme.
- **Clean Surface** (`surface-light`, `surface-dark`): Technical panels, registers, and contained navigation.
- **Soft Surface** (`surface-soft-light`, `surface-soft-dark`): Low-contrast hover fills and image-stage backgrounds.
- **Primary Ink** (`ink-light`, `ink-dark`): Headlines, key labels, and body copy requiring strongest contrast.
- **Secondary Ink** (`ink-secondary-light`, `ink-secondary-dark`): Supporting prose and quieter navigation.
- **Muted Ink** (`ink-muted-light`, `ink-muted-dark`): Metadata and tertiary evidence.
- **Fine Rule** (`line-light`, `line-dark`): Default dividers, grids, and panel boundaries.
- **Strong Rule** (`line-strong-light`, `line-strong-dark`): Interactive underlines, nodes, and boundaries needing more definition.
- **Selection Wash** (`selection-light`, `selection-dark`): Text selection that remains visibly related to the teal signal family.

### Named Rules

**The Sparse Signal Rule.** Teal identifies action, status, sequence, or system focus; it does not become a decorative field across ordinary content.

**The Semantic Theme Rule.** Dark mode swaps the paper, surface, ink, rule, and accent roles together; component hierarchy and accent rarity remain unchanged.

## Typography

**Display Font:** Geist (with sans-serif fallback)  
**Body Font:** Geist (with sans-serif fallback)  
**Label/Mono Font:** Geist Mono (with monospace fallback)

**Character:** Variable-weight Geist keeps the page direct, contemporary, and human without introducing a separate decorative display face. Geist Mono provides machine precision only where the content itself is operational.

### Hierarchy
- **Display** (580, fluid 3.5–5rem, 0.96): Direct hero statements; the supporting hero line drops to weight 420 and secondary ink.
- **Headline** (520, fluid 2.6–4.75rem, 1): Major section openings and contact statements, with tight tracking and restrained weight.
- **Project Display** (550, fluid 3.4–5.8rem, 0.92): Product names inside editorial chapters; the primary HoyTurnos chapter scales larger.
- **Title** (600, 23px, approximately 1.2): Company and compact content titles.
- **Body** (400, 16px, 1.7): Explanatory copy, generally constrained to roughly 520–760px rather than spanning the container.
- **Action** (620, 14px): Primary calls to action; text actions use slightly less weight.
- **Label** (500–600, 9–11px, 0.02–0.08em): Mono metadata, periods, indices, status, and technical labels; uppercase appears only when the content behaves like a register or machine label.

### Named Rules

**The Two-Voice Rule.** Geist speaks to people; Geist Mono speaks for the system. Do not set ordinary prose or display headlines in mono.

**The Tight-Scale Rule.** Large headings use negative tracking and near-solid line height; body copy restores open leading for legibility.

## Layout

The page uses a centered shell capped at 1220px, with 32px desktop gutters, 20px mobile gutters, and large vertical intervals that separate evidence chapters. The recurring desktop grammar is an asymmetric 7/5 split: hero copy against the live topology, section title against context, and narrative against supporting evidence. Project chapters reverse visual order on alternating desktop rows while preserving copy-first source order.

At 1080px, the hero and project chapters become single-column, visual alternation stops, and the toolbox moves from five to three columns. At 800px, the header becomes a compact two-column bar with a 42px menu control; section, about, experience, status, closing, and contact grids collapse into reading order. The experience table becomes a two-column trace with its vertical marker retained, and technical visuals resize rather than overflow. At 480px, hero actions stack, the primary action becomes full width, the toolbox becomes one column, and dense visual traces remove nonessential intermediate labels.

Section openings use a fine top rule and responsive top spacing, while registers and lists use repeated horizontal rules instead of card gutters. Touch-operated circular controls are 42px and key actions are at least 46–50px high.

**The Reading-Order Rule.** Responsive collapse always preserves narrative before visual evidence, even when desktop chapters alternate.

## Elevation & Depth

The system is flat by default. Depth comes primarily from tonal surfaces, one-pixel rules, clipping, grid backgrounds, overlap, and contrast. Shadows are reserved for elements that physically overlap another layer—system nodes, floating booking details, browser windows, phone hardware, and the mobile navigation—and remain broad, low-opacity, and heavily receded.

### Shadow Vocabulary
- **Technical Lift** (`0 12px 28px -22px color-mix(in srgb, var(--ink) 38%, transparent)`): Minimal separation for nodes over a system grid.
- **Floating Panel** (`0 24px 60px -30px rgba(0, 20, 17, 0.65)`): A localized shadow for the booking panel over real imagery.
- **Device Lift** (`0 30px 70px -34px rgba(48, 32, 140, 0.8)`): Project-local depth for overlapping phone frames.
- **Popover Lift** (`0 20px 50px -30px color-mix(in srgb, var(--ink) 45%, transparent)`): Mobile navigation above the sticky header.

### Named Rules

**The Structural Depth Rule.** A shadow must explain an overlap or floating layer; ordinary sections, lists, and resting actions remain flat.

## Shapes

Most of the interface is rectilinear and rule-bound. Small controls and technical labels use gently softened corners from 5–10px; system and project stages use 12–14px; monograms, status dots, trace markers, orbit lines, and device details use circles because they represent controls, position, or flow. Borders are consistently one pixel, and large regions are separated by rules rather than rounded card shells.

**The Softened-Technical Rule.** Use small radii to make technical panels approachable, but do not turn content regions into pill-shaped containers.

**The Circle-With-Purpose Rule.** Circular geometry is reserved for controls, identity marks, trace points, status, and diagram flow.

## Components

### Buttons

Actions are compact, direct, and visibly functional.

- **Shape:** Gently softened rectangular control with an 8px radius and a minimum height of 50px.
- **Primary:** Teal signal field, contrast text, 13px by 18px padding, 14px action type, and an inline 16px SVG icon.
- **Hover / Focus:** Hover lifts 2px and deepens the accent over 180ms; keyboard focus uses a 2px accent outline offset by 4px.
- **Text Action:** Transparent, 46px minimum height, with a strong-rule underline that becomes teal on hover.

### Chips

- **Style:** Compact Geist Mono labels with 6px by 9px padding, a 5px radius, and a fine-rule border.
- **State:** At rest they remain transparent; hover adds the soft surface and strengthens the boundary. They label technologies and do not behave as filters.

### Cards / Containers

- **Corner Style:** System stages use 12px radii; large project visual stages use 14px.
- **Background:** Clean or soft semantic surfaces, with project-local colors contained inside the visual frame.
- **Shadow Strategy:** Flat unless the element visibly overlaps another layer.
- **Border:** One-pixel fine rules; stronger rules indicate active or interactive technical nodes.
- **Internal Padding:** Dense technical nodes use 8–12px; content panels commonly use 18–34px.

### Navigation

- **Desktop:** A 72px sticky, blurred paper header with centered 14px links, a circular GM monogram, external profile links, and a circular theme control. Secondary ink becomes teal on hover.
- **Mobile:** At 800px, primary links move into a native details popover with a clean surface, 10px radius, and stacked 12px link padding.
- **Focus:** All links and summary controls share the offset teal focus outline.

### System Topology

The signature technical panel combines a 36px grid, dashed SVG routes, lightly lifted nodes, compact mono metadata, and one teal core node. Two teal signals travel along authored paths over 5.5 seconds, with the second staggered by 1.8 seconds. Reduced-motion mode removes the traveling signals entirely.

### Experience Trace

Experience entries behave like a vertical trace rather than cards: numbered circular markers sit on a continuous rule, with period, company, role, evidence, and technology labels aligned in columns. On mobile, the trace remains visible while the evidence collapses into one readable content column beside it.

### Project Evidence Frames

Project chapters share one large visual container but adapt to the evidence: HoyTurnos combines a real product image with a booking panel, PixoAI presents three overlapping phone frames, Paytor layers dashboard windows, and CEEI combines real imagery with a delivery trace. These project-specific compositions may use local brand colors and silhouettes, but they remain bounded by the portfolio's spacing, rule, and evidence-first grammar.

## Do's and Don'ts

### Do:
- **Do** use teal only for actions, system state, sequence, and focus.
- **Do** structure dense evidence with fine rules, trace markers, and aligned registers.
- **Do** keep body copy comfortably led and constrained while headings stay tight and direct.
- **Do** use real project imagery inside an authored evidence frame with accurate alternative text.
- **Do** preserve semantic theme roles, visible keyboard focus, touch-sized controls, and reduced-motion behavior.

### Don't:
- **Don't** turn project chapters, experience entries, or toolbox groups into generic floating cards.
- **Don't** use Geist Mono for ordinary prose or expressive display copy.
- **Don't** add decorative shadows, neon effects, logo walls, skill percentages, or excessive animation.
- **Don't** import a project's local brand palette into the portfolio's global token system.
- **Don't** hide or horizontally scroll core evidence on narrow screens; simplify and stack it.
