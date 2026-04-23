# Squabble-Up — Site Structure (Pseudocode)

This document defines the full section-by-section layout and component logic for the Squabble-Up website. It mirrors the conversion-first structure of premium boutique fitness brands, adapted for a personal boxing studio and portfolio.

---

## 1. Global App Shell

```
App
  ├── <Header />
  ├── <Main>
  │     ├── <HeroSection />
  │     ├── <BrandStatementSection />
  │     ├── <HowItWorksSection />
  │     ├── <ExperienceSection />
  │     ├── <ClassesSection />
  │     ├── <FounderSection />
  │     ├── <TestimonialsSection />
  │     └── <CTABannerSection />
  └── <Footer />

Global state:
  ├── theme: 'dark' | 'light'
  ├── mobileMenuOpen: boolean
  └── activeSection: string (scroll spy)
```

---

## 2. Header / Navigation

```
<Header>
  ├── Logo
  │     └── Text: "SQUABBLE-UP" or SVG lockup
  ├── Desktop Nav (hidden on mobile)
  │     ├── Link: Home
  │     ├── Link: How It Works
  │     ├── Link: Classes
  │     ├── Link: About
  │     └── Link: Contact
  ├── Right Side
  │     ├── ThemeToggle (dark/light)
  │     └── CTA Button: "Book a Class"
  └── Mobile
        ├── HamburgerIcon (toggles menu)
        └── MobileDrawer
              ├── Nav links (stacked)
              └── CTA Button

Behavior:
  ├── Sticky on scroll
  ├── Background transitions from transparent -> solid on scroll
  └── Active link highlighted based on scroll position
```

---

## 3. Hero Section

```
<HeroSection>
  ├── Background
  │     ├── Full-bleed video or image
  │     └── Dark overlay (opacity 50-70%)
  ├── Content (centered or left-aligned)
  │     ├── Eyebrow label: "Kelowna, BC"
  │     ├── H1 Headline: [BRAND TAGLINE]
  │     ├── Subheadline: [Supporting copy]
  │     └── CTA Group
  │           ├── Primary CTA: "Book a Class"
  │           └── Secondary CTA: "See My Work"
  └── Scroll indicator (animated arrow or dot)

Behavior:
  ├── Parallax scroll on background
  └── Entrance animation on headline (stagger fade-up)
```

---

## 4. Brand Statement Section

```
<BrandStatementSection>
  ├── Full-width centered block
  ├── Large display text: [MANIFESTO LINE]
  └── Supporting paragraph: mission, philosophy, who this is for

Behavior:
  └── Fade-in on scroll
```

---

## 5. How It Works Section

```
<HowItWorksSection>
  ├── Section label: "How It Works"
  ├── Section heading
  └── Steps Grid (3 columns desktop, stacked mobile)
        ├── Step 1
        │     ├── Number or icon
        │     ├── Title: "Show Up"
        │     └── Description
        ├── Step 2
        │     ├── Number or icon
        │     ├── Title: "Train Hard"
        │     └── Description
        └── Step 3
              ├── Number or icon
              ├── Title: "Level Up"
              └── Description
```

---

## 6. Experience / Value Props Section

```
<ExperienceSection>
  ├── Section heading: "The Squabble-Up Experience"
  └── Benefits grid (2x2 or 4-col)
        ├── Card
        │     ├── Icon
        │     ├── Title
        │     └── Description
        ├── Card: Community-first energy
        ├── Card: Real technique, no fluff
        ├── Card: All levels welcome
        └── Card: Kelowna local, built different
```

---

## 7. Classes / Programs Section

```
<ClassesSection>
  ├── Section heading: "What We Offer"
  └── Program Cards (horizontal scroll on mobile)
        ├── Card: Fundamentals
        │     ├── Image or icon
        │     ├── Class name
        │     ├── Short description
        │     └── CTA: "Learn More"
        ├── Card: Conditioning
        ├── Card: Mitt Work
        ├── Card: Private Sessions
        └── Card: Open Gym
```

---

## 8. Trainer / Founder Section (Portfolio Layer)

```
<FounderSection>
  ├── Two-column layout (image left, content right)
  ├── Left: Founder photo
  └── Right:
        ├── Eyebrow: "Meet the Coach"
        ├── Name: Terrell Pelletier
        ├── Title: Boxer, Designer, Developer
        ├── Bio: [Short personal statement]
        ├── Credentials list
        │     ├── 20+ years boxing
        │     ├── 5+ years design & dev
        │     └── Kelowna, BC based
        └── CTA: "See My Portfolio" -> links to portfolio section or page
```

---

## 9. Social Proof / Testimonials Section

```
<TestimonialsSection>
  ├── Section heading: "What People Say"
  └── Testimonial cards (carousel or grid)
        ├── Card
        │     ├── Quote text
        │     ├── Name
        │     ├── Role or context (student, client, etc.)
        │     └── Avatar (optional)
        └── Stats bar (optional)
              ├── Classes held
              ├── Students trained
              └── Years experience
```

---

## 10. CTA Banner Section

```
<CTABannerSection>
  ├── Bold headline: [CALL TO ACTION LINE]
  ├── Supporting subtext
  └── CTA Group
        ├── Primary: "Book a Class"
        └── Secondary: "Get in Touch"

Design:
  ├── Full-width dark or accent background
  └── High contrast type
```

---

## 11. Footer

```
<Footer>
  ├── Logo + brand tagline
  ├── Nav columns
  │     ├── Studio: Classes, Booking, Location
  │     ├── Portfolio: Work, About, Contact
  │     └── Social: Instagram, GitHub, LinkedIn
  ├── Contact info: email, city
  └── Legal
        ├── Copyright
        └── Privacy Policy (placeholder)
```

---

## Component Hierarchy Summary

```
src/components/
  layout/
    Header.tsx
    Footer.tsx
    MobileDrawer.tsx
  sections/
    HeroSection.tsx
    BrandStatementSection.tsx
    HowItWorksSection.tsx
    ExperienceSection.tsx
    ClassesSection.tsx
    FounderSection.tsx
    TestimonialsSection.tsx
    CTABannerSection.tsx
  shared/
    SectionLabel.tsx
    SectionHeading.tsx
    CTAButton.tsx
    Card.tsx
    ScrollIndicator.tsx
  ui/
    ThemeToggle.tsx
    AnimatedText.tsx
    ParallaxWrapper.tsx
    Badge.tsx
    Divider.tsx
```

---

*Reference site: Rumble Boxing (rumbleboxinggym.com) — adapted and personalized for Squabble-Up brand.*
