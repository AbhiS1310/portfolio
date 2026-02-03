# Neural Portfolio - Deep Space Cyber-Minimalist

A cutting-edge portfolio website built with **Next.js 14**, **Framer Motion**, **Tailwind CSS**, and **Lucide React**. Featuring a Dark Space aesthetic with neon lime accents, smooth animations, and interactive components.

## 🎨 Design Philosophy

**Deep Space Cyber-Minimalist** - A futuristic design language combining:
- Minimalist clean layouts with maximum impact
- Cyberpunk neon accents (#bef264 Cyber Lime)
- Deep space black backgrounds (#020617)
- Glassmorphism effects with backdrop blur
- Fluid animations and micro-interactions

## 🚀 Features

### 1. **Modern Floating Navbar**
- Glassmorphism dock design
- Smooth navigation with hover effects
- Mobile-responsive hamburger menu

### 2. **Neural Hero Section**
- Glowing headline with text-shadow effects
- Typewriter effect for subheadline
- Interactive mouse-following radial gradient

### 3. **Inference Lab (Bento Grid Projects)**
- Responsive grid with varied card sizes
- Voice Scheduling Agent (2x2) - Waveform animation
- Medical Vision AI (2x1) - Scanline animation
- AI Comedy Generator (1x1) - Gradient mesh
- GitHub Activity (1x1) - Terminal UI

### 4. **Experience Timeline**
- Vertical flickering neon line
- Timeline dots with color-coded companies
- Staggered card animations

### 5. **Contact Terminal**
- Functional Linux terminal UI
- Interactive input with blinking cursor
- Contact info cards

## 📁 Project Structure

```
/src
  /app
    layout.tsx
    page.tsx
    globals.css
  /components
    Navbar.tsx
    /ui
      BentoCard.tsx
      GlowEffect.tsx
    /sections
      Hero.tsx
      Projects.tsx
      Experience.tsx
      Terminal.tsx
  /lib
    utils.ts
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Space Black | `#020617` | Background |
| Cyber Lime | `#bef264` | Primary accent |
| Cyber Lime Dark | `#a3e635` | Hover state |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your portfolio!

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono

## 🎯 Key Features

✨ **Smooth Animations** - Framer Motion for all interactions
📱 **Responsive Design** - Works perfectly on all devices
🌙 **Dark Theme** - Easy on the eyes, modern aesthetic
⚡ **Fast** - Next.js 16 with Turbopack
🎨 **Customizable** - Easy to modify colors and content
♿ **Accessible** - Semantic HTML and proper contrast

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 📝 Customization

Edit these files to personalize:
- `src/components/sections/Experience.tsx` - Update roles
- `src/components/sections/Projects.tsx` - Add/modify projects
- `src/components/sections/Terminal.tsx` - Update contact info
- `src/app/globals.css` - Customize colors

## 📄 License

Free to use for personal and commercial projects!

---

**Built with ❤️ using Next.js, Framer Motion, and Tailwind CSS**
