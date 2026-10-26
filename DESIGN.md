---
name: Abhishek Chaudhary — Project Casebook
description: Editorial AI/ML portfolio with explanatory technical plates.
colors:
  paper: "#f8f7f3"
  ink: "#202b30"
  muted: "#59646a"
  accent: "#255bd6"
  accent-dark: "#1645ae"
  rule: "#d9dcd9"
  white: "#ffffff"
  soft-blue: "#e9effb"
  technical-sage: "#e8ede9"
  technical-blue: "#e8edf5"
  technical-sand: "#eeebe4"
  experience-surface: "#eeefe9"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem, 3.7vw, 3.15rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.035em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.15rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    lineHeight: 1.7
  project-body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    lineHeight: 1.7
  emphasis:
    fontFamily: "Georgia, serif"
    fontWeight: 400
  navigation:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 600
rounded:
  control: "7px"
  icon: "8px"
  plate: "14px"
  field: "5px"
spacing:
  compact: "16px"
  medium: "24px"
  wide: "48px"
  section-mobile: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "11px 19px"
  button-primary-hover:
    backgroundColor: "{colors.accent-dark}"
  button-copy:
    rounded: "{rounded.control}"
    padding: "11px 19px"
  icon-button:
    rounded: "{rounded.icon}"
  email-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px"
  technical-plate:
    backgroundColor: "{colors.technical-sage}"
    rounded: "{rounded.plate}"
    padding: "20px 17px 18px"
  project-dialog:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    width: "min(800px, calc(100% - 32px))"
---

# Design System: Abhishek Chaudhary

## Overview

**Creative North Star: "The Project Casebook"**

A warm, quiet casebook for recruiters and hiring managers. Dark Manrope typography, occasional Georgia italic emphasis, and restrained blue organize the work; generous whitespace gives technical diagrams and project explanations room to read.

**Key Characteristics:**
- Warm paper and dark typography.
- Editorial project rows with illustrative technical plates.
- Restrained blue actions and flat ruled content.

Sidecar tonal strips are synthesized preview aids, not additional authored palette tokens.

Source-grounded record of globals.css, Portfolio, ProjectVisual, ProjectModal, and the root font setup. Browser/computed-style verification was unavailable; this document describes authored implementation.

## Colors

### Primary
Restrained blue (`accent`) marks primary actions, emphasized words, diagram centers, and project links. `accent-dark` supplies hover and architecture-heading contrast. `soft-blue` supports the contact area and status backgrounds.

### Neutral
`paper` is the page and dialog canvas; `ink` and `muted` separate primary and supporting text. `rule` divides content without enclosing it. Sage, blue, and sand technical surfaces group conceptual diagrams; `experience-surface` provides a quiet full-width band. White is used within controls and diagrams.

**The Restrained Blue Rule.** Reserve blue for actions, selected emphasis, and meaningful diagram centers.

## Typography

Self-hosted variable Manrope (200–800) supplies display and body text, with sans-serif fallback. Georgia provides italic emphasis within selected headings. The display, headline, title, body, project-body, and navigation roles are recorded above; prose is capped at 68ch.

The hero display changes at 1500px to 5.4rem; at 800px to clamp(2.8rem, 8.5vw, 4.6rem); and at 520px to clamp(2.45rem, 9.8vw, 3.3rem). At 800px section headings become 34px and project titles 27px. Keep the title hierarchy and restrained weight rather than inventing extra display faces.

## Layout

A centered container caps at 1200px, with 96px total side allowance on desktop, 64px below 1050px, and 40px below 800px. Featured work uses paired visual/text columns and 72px gaps, with the second row reversed. Supporting work uses ruled two-column rows. Sections use generous 86–96px spacing on desktop and 64px on mobile.

At 800px the hero, featured projects, experience, and about introduction become single-column; featured visual/text ordering returns to document order. Navigation becomes a disclosure and contact content stacks. At 520px supporting work, skills, and architecture steps become single-column. The sticky header is 86px tall, reducing to 72px below 800px; anchor offsets account for it.

## Elevation & Depth

Content is flat, separated by rules, whitespace, and muted surface bands. Diagrams use strokes and overlapping shapes. The dialog alone carries the ambient shadow and dark backdrop recorded in the sidecar.

**The Flat Content Rule.** Keep ordinary content flat; reserve the large ambient shadow for modal separation.

## Shapes

Technical plates and dialogs share gently rounded corners. Primary and copy controls use the control radius; icon controls are slightly rounder. Thin borders define content divisions and the fallback field. The small circular opener belongs to diagram plates, not general content containers.

## Components

### Buttons
Primary controls use blue with white text and darken on hover. Text actions use an inline arrow and turn blue on hover. Copy-email uses a thin blue-gray outline with a pale hover fill. Icon buttons have a 44px minimum target and a muted hover background. Focus uses a 3px accent outline with 4px offset. Disabled buttons dim to half opacity.

### Navigation
Compact, sticky paper navigation uses the navigation role, with blue hover feedback. The mobile disclosure closes on selection or Escape and returns focus to its toggle on Escape.

### Cards / Containers
Featured projects are open editorial rows rather than enclosing cards. Diagram plates use the recorded surface variants and plate radius; an overlaid arrow indicates exploration. Supporting projects use top rules.

### Inputs / Fields
The read-only email fallback uses a white field, a blue-gray border, the field radius, and accent caret. It appears when clipboard copying fails and selects its value for manual copying.

### Project Dialog
A native dialog keeps architecture and contributions in a scrollable paper surface, with sticky close bar and two-column ruled architecture steps. Escape, explicit close, and outside clicks dismiss it; source code restores previous focus and body scrolling. These behaviors were inspected in source, not exercised in a browser.

### Motion
The hero enters through a 9px upward translation over .65s; hover colors change over .18–.2s. Reduced-motion preference disables authored animation, transitions, and smooth scrolling.

## Do's and Don'ts

### Do:
- **Do** use generous project spacing and simple explanatory diagrams.
- **Do** preserve visible keyboard focus and reduced-motion behavior.
- **Do** keep technical detail in accessible, internally scrolling project dialogs.

### Don't:
- **Don't** present conceptual diagrams as product screenshots or live telemetry.
- **Don't** introduce decorative card shadows throughout the editorial content.
