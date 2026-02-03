# Setup & Customization Guide

## 🎯 Quick Start

Your portfolio is now running on `http://localhost:3000`! The development server is already active.

### To continue development:
```bash
npm run dev
```

### To build for production:
```bash
npm run build
npm start
```

---

## 📝 Customization Guide

### 1. **Update Your Information**

#### Hero Section
Edit `src/components/sections/Hero.tsx`:
```typescript
// Change the headline
<span className="block glow-text-lg mb-4">
  Architecting
</span>
<span className="block bg-gradient-to-r from-cyber-lime via-cyan-400 to-cyber-lime bg-clip-text text-transparent">
  Autonomous Intelligence  // ← Change this
</span>

// Change the typewriter subtitle
<TypewriterText
  text="Specializing in Real-time Voice Pipelines & Multimodal RAG"  // ← Change this
  delay={500}
/>
```

#### Projects Section
Edit `src/components/sections/Projects.tsx`:
```typescript
// Update project cards with your own projects
// Each ProjectCard accepts:
// - title: string
// - description: string
// - icon: React component
// - span: grid sizing
// - tags: array of tech tags
```

#### Experience Section
Edit `src/components/sections/Experience.tsx`:
```typescript
const experiences = [
  {
    company: 'Your Company',  // ← Change
    role: 'Your Role',         // ← Change
    period: '2024 - Present',  // ← Change
    description: 'Your description...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
    color: '#bef264',  // Change the timeline dot color
  },
  // ... more roles
];
```

#### Contact Information
Edit `src/components/sections/Terminal.tsx`:
```typescript
{[
  { label: 'Email', value: 'your.email@example.com' },  // ← Change
  { label: 'GitHub', value: '@yourprofile' },            // ← Change
  { label: 'LinkedIn', value: '/in/yourprofile' },       // ← Change
].map((contact) => (
  // ...
))}
```

#### Navbar Links
Edit `src/components/Navbar.tsx`:
```typescript
const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
  // Add more links here
];
```

---

## 🎨 Design Customization

### Change the Color Scheme

Edit `src/app/globals.css`:
```css
@theme {
  --color-space-black: #020617;        // Background
  --color-cyber-lime: #bef264;         // Primary accent
  --color-cyber-lime-dark: #a3e635;    // Hover state
  --color-surface: #0f172a;            // Cards
  --color-surface-light: #1e293b;      // Borders
}
```

**Color Ideas:**
- Deep Purple: `#7c3aed` instead of `#bef264`
- Deep Blue: `#0ea5e9` instead of `#bef264`
- Neon Pink: `#ec4899` instead of `#bef264`

### Modify Typography

Update font families in `src/app/globals.css`:
```css
@theme {
  --font-sans: "Your Font", sans-serif;
  --font-mono: "Your Mono Font", monospace;
}
```

### Adjust Animation Speeds

Edit `tailwind.config.ts`:
```typescript
animation: {
  'waveform': 'waveform 0.8s ease-in-out infinite',  // Change duration
  'scanline': 'scanline 3s linear infinite',         // Change duration
  'flicker': 'flicker 0.15s infinite',               // Change duration
}
```

---

## 🚀 Adding New Sections

### Example: Add a Skills Section

1. Create `src/components/sections/Skills.tsx`:
```typescript
'use client';

import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-4xl font-bold glow-text mb-12">Skills</h2>
        {/* Your skills content */}
      </motion.div>
    </section>
  );
}
```

2. Import and add to `src/app/page.tsx`:
```typescript
import { Skills } from '@/components/sections/Skills';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />  {/* ← Add here */}
      <Experience />
      <Terminal />
    </main>
  );
}
```

---

## 📱 Mobile Optimization

The portfolio is fully responsive. To customize mobile behavior:

Edit Tailwind classes in components:
```typescript
// Hidden on mobile, visible on desktop
<div className="hidden md:block">Desktop only</div>

// Responsive sizing
<h1 className="text-3xl md:text-5xl lg:text-7xl">
  Responsive Heading
</h1>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Grid items */}
</div>
```

---

## 🔗 Adding External Links

Add social media links to navbar and footer:

```typescript
// In Navbar.tsx
<a 
  href="https://github.com/yourprofile" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-white/80 hover:text-cyber-lime"
>
  GitHub
</a>
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `.next` folder to Netlify

### Deploy to Your Own Server

1. Build for production:
```bash
npm run build
npm start
```

2. Use a process manager like `pm2`:
```bash
pm2 start "npm start" --name "portfolio"
```

---

## 🐛 Troubleshooting

### Build Errors

If you get Tailwind errors:
```bash
npm run build
```

If that doesn't work, clear cache:
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Animation Issues

- Check that Framer Motion is installed: `npm list framer-motion`
- Ensure `'use client'` is at the top of component files
- Check browser console for any JavaScript errors

### Styling Issues

- Clear browser cache (Ctrl+Shift+Delete)
- Ensure Tailwind config is in `tailwind.config.ts`
- Check that globals.css is imported in layout.tsx

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

---

## ✨ Pro Tips

1. **Performance**: Use `next/image` for optimized images
2. **SEO**: Update metadata in `src/app/layout.tsx`
3. **Animations**: Use `whileInView` for scroll-triggered animations
4. **Accessibility**: Always include alt text and ARIA labels
5. **TypeScript**: Enable strict mode for better type safety

---

**Enjoy building your awesome portfolio! 🚀**
