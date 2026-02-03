# Component Reference Guide

Complete reference for all components in the Neural Portfolio.

---

## 🧩 Component Hierarchy

```
App Root
├── Navbar (Navigation)
├── Hero (Landing Section)
├── Projects (Bento Grid)
│   ├── BentoCard (Project 1-4)
│   ├── WaveformAnimation
│   ├── ScanlineAnimation
│   ├── GradientMesh
│   └── TerminalWindow
├── Experience (Timeline)
│   └── BentoCard (Experience Cards)
├── Terminal (Contact Form)
└── Footer
```

---

## 📦 Component Exports

### UI Components

#### **BentoCard**
**File:** `src/components/ui/BentoCard.tsx`

A reusable glassmorphism card component with hover effects.

**Props:**
```typescript
interface BentoCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  span?: 'col-span-1' | 'col-span-2' | 'col-span-3' | 'col-span-4' | 'row-span-1' | 'row-span-2';
  onClick?: () => void;
}
```

**Features:**
- Glassmorphism background with backdrop blur
- Hover lift effect (y: -10px)
- Glow shadow on hover
- Optional title and description
- Custom grid spanning
- Smooth spring animation

**Usage:**
```tsx
<BentoCard
  title="Voice Scheduling Agent"
  description="Real-time voice processing"
  span="col-span-2 row-span-2"
>
  <YourContent />
</BentoCard>
```

---

#### **GlowEffect**
**File:** `src/components/ui/GlowEffect.tsx`

Mouse-following radial gradient glow effect.

**Props:**
```typescript
interface GlowEffectProps {
  color?: string;
  intensity?: number;
}
```

**Features:**
- Tracks mouse position in real-time
- Smooth radial gradient
- Customizable color and intensity
- Used globally for background effect

**Usage:**
```tsx
<GlowEffect intensity={0.6} />
```

---

## 🎯 Section Components

### **Navbar**
**File:** `src/components/Navbar.tsx`

Floating navigation dock with mobile support.

**Features:**
- Glassmorphism styling
- Animated logo
- Smooth nav item animations
- Mobile hamburger menu
- Scroll-to anchors

**Navigation Items:**
- Projects (#projects)
- Experience (#experience)
- Contact (#contact)

---

### **Hero**
**File:** `src/components/sections/Hero.tsx`

Landing section with headline and typewriter effect.

**Components Used:**
- `TypewriterText` - Custom typewriter animation
- `GlowEffect` - Background gradient

**Features:**
- Glowing headline with gradient
- Typewriter effect on subheadline
- Scroll parallax
- CTA buttons
- Animated scroll indicator

**Content Editable:**
- Headline: "Architecting Autonomous Intelligence"
- Subheadline: "Specializing in Real-time Voice Pipelines & Multimodal RAG"
- Button links

---

### **Projects**
**File:** `src/components/sections/Projects.tsx`

Bento grid layout with 4 featured projects.

**Sub-components:**
- `WaveformAnimation` - Audio bar animation
- `ScanlineAnimation` - Vertical scan effect
- `GradientMesh` - Animated gradient background
- `TerminalWindow` - Terminal UI styling

**Grid Layout:**
```
Col 1-2, Row 1-2    | Col 3-4, Row 1    | Col 1
Voice Scheduling    | Medical Vision    | AI Comedy
(2x2)              | (2x1)            | (1x1)

Col 3-4, Row 2
GitHub Activity
(1x1)
```

**Features:**
- Responsive grid (auto-adjusts columns)
- Individual project animations
- Tech tag clouds
- Custom animations per project
- Staggered reveal on scroll

**Projects:**
1. **Voice Scheduling Agent** - WebRTC, Realtime API, Python, NVIDIA
2. **Medical Vision AI** - TensorFlow, DICOM, FastAPI
3. **AI Comedy Generator** - LLM, Claude, Humor
4. **GitHub Activity** - GitHub API, Analytics, React

---

### **Experience**
**File:** `src/components/sections/Experience.tsx`

Timeline view of professional experience.

**Features:**
- Vertical flickering neon line
- Color-coded timeline dots
- Slide-in card animations
- Achievement bullet points
- Company and role information

**Experience Entries:**
1. **Digiquanta / Mondee**
   - Role: Senior AI Engineer
   - Period: 2023 - Present
   - Achievements: 3 items
   - Color: #bef264 (Cyber Lime)

2. **Enthuons**
   - Role: ML Research Engineer
   - Period: 2021 - 2023
   - Achievements: 3 items
   - Color: #06b6d4 (Cyan)

---

### **Terminal**
**File:** `src/components/sections/Terminal.tsx`

Interactive contact form styled as Linux terminal.

**Features:**
- Terminal window UI
- Interactive text input
- Blinking cursor animation
- Message history tracking
- Terminal header with window controls
- Send button with hover effects
- Contact info cards

**Contact Fields:**
- Email
- GitHub
- LinkedIn

**Interactions:**
- Type to compose message
- Press Enter or click Send
- Real-time cursor animation
- Message history display

---

## 🎨 Styling & Utilities

### **Global CSS Classes**

**Text Effects:**
- `.glow-text` - Glowing text with shadow
- `.glow-text-lg` - Larger glow effect

**Components:**
- `.glassmorphism` - Card background with blur and border
- `.glassmorphism-dark` - Darker variant
- `.terminal-text` - Monospace terminal styling

**Buttons:**
- `.cyber-button` - Primary button (lime background)
- `.cyber-button-outline` - Secondary button (outline)

---

### **Utility Functions**

#### **cn()**
**File:** `src/lib/utils.ts`

Merges Tailwind classes with proper deduplication.

**Usage:**
```typescript
import { cn } from '@/lib/utils';

const buttonClass = cn(
  'px-4 py-2 rounded',
  isActive && 'bg-blue-500',
  className
);
```

---

## 🎬 Animation Variants

### **Motion Configuration**

#### Container Variants
```typescript
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};
```

#### Item Variants
```typescript
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};
```

---

## 🔄 Component Flow

### Initial Page Load
1. **layout.tsx** loads and applies global styles
2. **GlowEffect** initializes mouse tracking
3. **Navbar** renders at top with fixed positioning
4. **Hero** section becomes visible with fade-in
5. Remaining sections initialize but remain off-screen

### On Scroll
1. **Intersection Observer** detects section in viewport
2. **whileInView** triggers animations
3. **containerVariants** starts the animation
4. **itemVariants** stagger child animations
5. **Hover effects** become available on cards

### On Interaction
1. **Navbar** links scroll to anchors
2. **Cards** lift and glow on hover
3. **Terminal** accepts input and shows history
4. **Buttons** respond with scale animations

---

## 📊 Component Statistics

| Component | Type | File Size | Complexity |
|-----------|------|-----------|-----------|
| BentoCard | UI | 45 lines | Low |
| GlowEffect | UI | 35 lines | Medium |
| Navbar | Section | 60 lines | Medium |
| Hero | Section | 95 lines | Medium |
| Projects | Section | 220 lines | High |
| Experience | Section | 155 lines | High |
| Terminal | Section | 145 lines | High |

---

## 🔧 Customization Points

### Easy to Modify
- Text content (headlines, descriptions)
- Colors (in globals.css)
- Images and icons
- Links and URLs
- Experience entries
- Project details

### Medium Difficulty
- Animation speeds (in tailwind.config.ts)
- Component sizing (Tailwind classes)
- Grid layout (span values)
- Hover effects

### Advanced
- Add new sections
- Create new animation variants
- Customize Framer Motion transitions
- Extend Tailwind config

---

## 🚀 Performance Notes

### Optimizations
- **Code Splitting:** Each section is lazy-loaded
- **Image Optimization:** Next.js handles images
- **CSS:** Tailwind only includes used classes
- **Animations:** GPU-accelerated with Framer Motion
- **Bundle Size:** ~45KB gzipped

### Best Practices
- Use `whileInView` for scroll triggers
- Limit simultaneous animations
- Use `willChange` for performance-critical elements
- Debounce expensive operations

---

## 📱 Responsive Behavior

All components include responsive design:

**Mobile Overrides:**
- Stack layouts vertically
- Reduce animation complexity
- Adjust font sizes
- Optimize spacing

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🎯 Integration Guide

### Adding a Component to a Section
```tsx
import { YourComponent } from '@/components/ui/YourComponent';

export function SectionName() {
  return (
    <section>
      <YourComponent prop="value" />
    </section>
  );
}
```

### Adding a New Section
```tsx
// Create src/components/sections/NewSection.tsx
'use client';

import { motion } from 'framer-motion';

export function NewSection() {
  return (
    <section id="newsection" className="py-20 px-4 md:px-8">
      {/* Your content */}
    </section>
  );
}

// Import in src/app/page.tsx
import { NewSection } from '@/components/sections/NewSection';
```

---

## 🔍 Debugging Tips

### Check Component Props
```typescript
// Add console.log in component
useEffect(() => {
  console.log('Component props:', props);
}, [props]);
```

### Inspect Animations
```typescript
// Add onAnimationComplete callback
<motion.div
  onAnimationComplete={() => console.log('Done!')}
>
  Content
</motion.div>
```

### Verify CSS Classes
- Inspect element in DevTools
- Check Applied Styles section
- Verify Tailwind classes exist

---

**This guide covers all components in the Neural Portfolio. For implementation details, see component files directly!**
