# Project Structure & File Reference

## 📂 Complete Directory Tree

```
poortfolio/
├── .git/                          # Git repository
├── .next/                         # Next.js build output
├── node_modules/                  # Dependencies
├── public/                        # Static assets
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── page.tsx              # Main page - assembles all sections
│   │   ├── globals.css           # Global styles & theme
│   │   └── favicon.ico
│   ├── components/
│   │   ├── Navbar.tsx            # Floating navigation dock
│   │   ├── ui/
│   │   │   ├── BentoCard.tsx     # Reusable card component with hover effects
│   │   │   └── GlowEffect.tsx    # Mouse-following gradient glow
│   │   └── sections/
│   │       ├── Hero.tsx          # Hero with typewriter effect
│   │       ├── Projects.tsx      # Bento grid with 4 projects
│   │       ├── Experience.tsx    # Timeline with neon line
│   │       └── Terminal.tsx      # Contact terminal UI
│   └── lib/
│       └── utils.ts              # cn() utility for Tailwind
├── .eslintrc.json                # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Lock file
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── PORTFOLIO_README.md           # Portfolio overview
├── CUSTOMIZATION_GUIDE.md        # Setup & customization guide
└── THIS FILE

```

---

## 📄 Key Files Explained

### `src/app/layout.tsx`
Root layout component that wraps entire application.
- Sets metadata for SEO
- Imports global styles
- Applies base styling to body element

### `src/app/page.tsx`
Main portfolio page that assembles all sections.
- Imports all components (Navbar, Hero, Projects, etc.)
- Manages global glow effect
- Includes footer

### `src/app/globals.css`
Global stylesheet with Tailwind CSS v4 theme.
- Defines custom colors using @theme
- Sets up global component classes
- Custom scrollbar styling

### `src/components/Navbar.tsx`
Floating navigation bar.
- Glassmorphism styling
- Animated logo and nav items
- Mobile hamburger menu
- Smooth scroll anchors

### `src/components/ui/BentoCard.tsx`
Reusable card component for projects.
- Glassmorphism background
- Hover lift animation
- Border glow effect
- Flexible children and metadata

### `src/components/ui/GlowEffect.tsx`
Mouse-following gradient glow effect.
- Tracks mouse position
- Creates radial gradient
- Used globally in page background

### `src/components/sections/Hero.tsx`
Hero section with headline and typewriter.
- Glow text effect
- Custom typewriter animation
- Mouse-following gradient
- CTA buttons
- Scroll indicator

### `src/components/sections/Projects.tsx`
Bento grid layout with 4 projects.
- Responsive grid (1-4 columns)
- Voice Scheduling with waveform animation
- Medical Vision with scanline animation
- Comedy Generator with gradient mesh
- GitHub Activity with terminal UI
- Staggered animations

### `src/components/sections/Experience.tsx`
Timeline section with experience cards.
- Vertical neon flickering line
- Color-coded timeline dots
- Sliding card animations
- Achievement bullet points
- Multiple roles/companies

### `src/components/sections/Terminal.tsx`
Interactive contact form as terminal.
- Linux terminal UI styling
- Text input simulation
- Message history tracking
- Send functionality
- Contact info cards below

### `tailwind.config.ts`
Tailwind CSS configuration.
- Animation definitions
- Keyframe animations
- Extension of base theme

### `tsconfig.json`
TypeScript configuration.
- Strict mode enabled
- Path aliases (@/*)
- JSX configuration

---

## 🔧 Configuration Files

### `next.config.ts`
Next.js specific settings:
- Image optimization
- Build configuration
- Development settings

### `postcss.config.mjs`
PostCSS configuration for Tailwind:
- Tailwind CSS plugin setup

### `.eslintrc.json`
ESLint rules for code quality:
- Next.js recommended rules
- TypeScript support

### `package.json`
Project metadata and dependencies:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "16.1.6",
    "react": "19.0.0",
    "framer-motion": "latest",
    "lucide-react": "latest"
  }
}
```

---

## 🎯 Component Relationships

```
layout.tsx (Root)
├── page.tsx (Main Page)
│   ├── Navbar
│   ├── Hero
│   ├── Projects
│   │   ├── BentoCard (x4)
│   │   └── WaveformAnimation, ScanlineAnimation, etc.
│   ├── Experience
│   │   └── BentoCard (x2)
│   ├── Terminal
│   └── Footer
└── GlowEffect (Global)
```

---

## 🎨 Styling Approach

### Tailwind CSS v4
- New `@theme` directive in CSS
- Custom color system
- Animation definitions
- Component utilities

### Custom Components
- BentoCard with hover effects
- GlowEffect with mouse tracking
- Reusable across sections

### Global Classes
```css
.glow-text           /* Glowing text styling */
.glow-text-lg        /* Larger glow effect */
.glassmorphism       /* Card background with blur */
.terminal-text       /* Monospace terminal styling */
.cyber-button        /* Primary button style */
.cyber-button-outline /* Secondary button */
```

---

## 🚀 Build & Deploy

### Development
```bash
npm run dev    # Runs on localhost:3000 with hot reload
```

### Production Build
```bash
npm run build  # Creates optimized .next folder
npm start      # Starts production server
```

### Output
- Static pages pre-rendered
- Optimized JavaScript bundles
- CSS minified by Tailwind
- Images optimized by Next.js

---

## 📦 Dependencies Breakdown

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.1.6 | React framework |
| react | 19.0.0 | UI library |
| framer-motion | latest | Animations |
| lucide-react | latest | Icons |
| tailwindcss | 4.1.18 | Styling |
| typescript | latest | Type safety |
| clsx | latest | Class merging |
| tailwind-merge | latest | Class deduplication |

---

## 💡 Development Tips

### Code Organization
- Keep components small and focused
- Use TypeScript for type safety
- Follow React best practices

### Performance
- Use `'use client'` for interactive components
- Implement code splitting
- Optimize images
- Cache static content

### Maintainability
- Update content in data files (not HTML)
- Use component variants
- Extract repeated patterns into utilities
- Document complex logic

### Testing
- Test responsive designs
- Check animation smoothness
- Verify accessibility
- Cross-browser testing

---

## 🔗 Important Links

- **Development Server**: http://localhost:3000
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Lucide Icons**: https://lucide.dev

---

## 📝 Quick Reference

### Add a new component:
1. Create file in `src/components/` or `src/components/sections/`
2. Add `'use client'` if using interactivity
3. Import in relevant parent
4. Add styles using Tailwind classes

### Add a new section:
1. Create component in `src/components/sections/`
2. Use motion.div for animations
3. Import in `src/app/page.tsx`
4. Add anchor link in Navbar

### Customize colors:
1. Edit `src/app/globals.css` @theme section
2. Update class names in components
3. Rebuild to apply changes

---

**Happy coding! 🚀**
