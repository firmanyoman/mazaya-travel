---
version: alpha
name: Mazaya Amanah Teal
description: Warm trust-first design system for Mazaya Travel. Uses original logo turquoise and yellow as restrained accents, anchored by deep teal and warm ivory for stronger credibility and conversion.
colors:
  primary: "#0F5B5B"
  brand-teal: "#61C7C3"
  brand-yellow: "#F0EB20"
  background: "#F7F3E8"
  surface: "#FFFFFF"
  text: "#123434"
  muted: "#647A77"
  border: "#C9DED9"
  primary-hover: "#0C4C4C"
  primary-soft: "#DCEFED"
  success-soft: "#E7F6EC"
  success-text: "#1E6B43"
  warning-soft: "#FFF8CC"
  warning-text: "#6B5A00"
  danger-soft: "#FDECEC"
  danger-text: "#8A2E2E"
typography:
  hero-desktop:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-0.02em"
  hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.125rem
    fontWeight: 700
    lineHeight: 1.24
    letterSpacing: "-0.02em"
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "-0.02em"
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: 700
    lineHeight: 1.28
  card-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: 650
    lineHeight: 1.4
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.67
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.75
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.71
  label:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.9375rem
    fontWeight: 650
    lineHeight: 1.33
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: 12px
  md: 20px
  lg: 24px
  pill: 999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 64px
  section-mobile: 48px
  section-tablet: 64px
  section-desktop: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 16px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 16px
  button-secondary-outline:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 16px
  button-secondary-soft:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 16px
  button-promo:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 16px
  card-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 24px
  trust-badge:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 12px
  icon-accent:
    backgroundColor: "{colors.brand-teal}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 12px
  text-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 8px
  divider-soft:
    backgroundColor: "{colors.border}"
    textColor: "{colors.text}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 8px
  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px
  panel-warning:
    backgroundColor: "{colors.warning-soft}"
    textColor: "{colors.warning-text}"
    rounded: "{rounded.md}"
    padding: 24px
  panel-success:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.success-text}"
    rounded: "{rounded.md}"
    padding: 24px
  panel-danger:
    backgroundColor: "{colors.danger-soft}"
    textColor: "{colors.danger-text}"
    rounded: "{rounded.md}"
    padding: 24px
---

## Overview

Mazaya Amanah Teal is a trust-first design system for a local Umrah and Hajj travel website based in Bone. The system keeps Mazaya's original logo colors intact but prevents the interface from feeling pale or cheap by anchoring the experience in deep teal and warm ivory. It should feel calm, trustworthy, warm, and easy to scan on mobile.

## Colors

- **Primary (`#0F5B5B`)** anchors the brand with weight and credibility. Use for the main CTA, key headings, and high-emphasis interactive states.
- **Brand Teal (`#61C7C3`)** preserves the logo identity. Use as accent only: icons, chips, hover hints, light highlights.
- **Brand Yellow (`#F0EB20`)** is a micro-highlight color only. Use for badges or small promotions, never as a dominant page background.
- **Background (`#F7F3E8`)** gives warmth and avoids sterile white-heavy layouts.
- **Surface (`#FFFFFF`)** keeps cards and forms crisp and readable.
- **Text (`#123434`)** is the default text color for headings and body copy.
- **Muted (`#647A77`)** supports secondary content without losing the calm tone.
- **Border (`#C9DED9`)** defines inputs and cards with soft structure.

## Typography

Plus Jakarta Sans is the only font family for launch. It is modern, warm, and readable for both marketing pages and admin-facing UI. Hero headings should feel confident but not luxurious or editorial. Body text should prioritize clarity for non-technical and family audiences.

## Layout

Use a 1200px maximum container, 12-column desktop grid, and an 8px spacing system. Section padding should be 96px on desktop, 64px on tablet, and 48px on mobile. Keep article reading widths narrower than general marketing sections.

## Elevation & Depth

Prefer border-first surfaces over heavy shadows. Depth should be subtle. Cards can lift slightly on hover, but the system should remain calm and grounded rather than flashy.

## Shapes

Use 20px card radii, 12px button and input radii, and pill radii for trust badges. Rounded shapes should feel warm and human, but not toy-like.

## Components

`button-primary` is the dominant action and maps to “Daftar Sekarang.” `button-secondary-outline` and `button-secondary-soft` support “WhatsApp Konsultasi” and lower-emphasis actions. `button-promo` exists for small highlights only and must not replace the primary CTA pattern. `card-default` is the base for package cards, testimonial cards, legal proof cards, and form sections.

## Do's and Don'ts

- **Do** use deep teal as the main trust anchor.
- **Do** use warm ivory as the dominant page background.
- **Do** reserve turquoise for accents and brand recognition.
- **Do** keep one dominant CTA per section or viewport.
- **Don't** use turquoise for long body text on white.
- **Don't** use yellow for large section backgrounds.
- **Don't** build turquoise-yellow gradients as primary hero treatments.
- **Don't** let secondary CTAs visually compete with the main conversion action.
