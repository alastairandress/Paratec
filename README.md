# ParaTec - Specialist Recruitment Website

A modern, high-performance recruitment website for Web3, Machine Learning, and Quantitative Finance specialists.

**Live Demo**: https://www.paratec.io

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠 Tech Stack

- **React 19** - UI framework
- **Vite 8** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **ESLint** - Code quality

## 📁 Project Structure

```
src/
├── App.jsx                    # Main application
├── components/
│   └── NeuralNetwork.jsx      # Canvas animation
├── index.css                  # Global styles
└── main.jsx                   # Entry point

index.html                     # HTML root
vite.config.js                # Build configuration
eslint.config.js              # Linting rules
```

## 🎨 Design Features

- **Dark Theme**: Modern dark background with Luna blue (#4A90D9)
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth scroll animations with Framer Motion
- **Neural Network**: Interactive canvas background animation
- **Performance**: Optimized for fast loading with Vite

## 📝 Content Sections

### Navbar
- Fixed navigation with smooth scroll
- Mobile hamburger menu
- "Book Now" CTA button

### Hero
- Eye-catching headline with animated text
- Dual CTA buttons
- Neural network background animation

### About
- 3-column feature cards
- Company value proposition
- Clean card design with hover effects

### Services
- 4 service categories (Web3, ML, Quant, General Tech)
- Role listings under each service
- Interactive hover states

### Live Roles
- Current job openings
- Location, type, and salary info
- 6 example roles (customize with real data)

### Contact
- Contact form with file upload
- Location and hours info
- Success state after submission

### Footer
- Company info and links
- Navigation links
- Social links (LinkedIn)
- Copyright

## 🎯 Customization

### Change Colors
Edit `src/index.css`:
```css
@theme {
  --color-luna: #4A90D9;        /* Primary blue */
  --color-luna-light: #6BA3E0;  /* Light variant */
  --color-luna-dark: #3A7BC8;   /* Dark variant */
}
```

### Update Content
Edit `src/App.jsx` to change:
- Headlines and descriptions
- Service categories
- Job listings
- Contact information
- Social links

### Customize Fonts
In `src/index.css`:
```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-display: 'Space Grotesk', 'Inter', system-ui, sans-serif;
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect GitHub**
   - Push code to GitHub
   - Visit vercel.com/new
   - Import your repository
   - Vercel auto-configures everything

2. **Deploy from CLI**
   ```bash
   npm install -g vercel
   vercel
   ```

### Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder ready for deployment.

### Vercel Configuration (Auto-detected)

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x

## 📊 Performance

- **Bundle Size**: ~150KB gzipped (including all dependencies)
- **Load Time**: <2 seconds on 4G
- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimized

## 🔧 Development

### Hot Module Replacement
Changes auto-reload in browser without losing state.

### ESLint
```bash
npm run lint
```

Checks code quality and React best practices.

### Debug
- Open DevTools (F12)
- Install React DevTools browser extension
- Check browser console for errors

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎨 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Luna Blue | #4A90D9 | Primary, buttons, links |
| Luna Light | #6BA3E0 | Hover states |
| Luna Dark | #3A7BC8 | Active states |
| Background | #050505 | Main background |
| Surface | #0a0a0a | Secondary background |
| Text Primary | #ffffff | Headings |
| Text Secondary | #e5e5e5 | Body text |
| Text Tertiary | #a3a3a3 | Muted text |

## 🎭 Animation Classes

- `.animate-float` - Floating animation
- `.animate-float-delayed` - Delayed floating
- `.animate-pulse-glow` - Pulsing glow effect

## 📚 Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contributing

To make changes:
1. Edit files in `src/`
2. Test in development (`npm run dev`)
3. Build and preview (`npm run build` → `npm run preview`)
4. Deploy to production

## 📞 Support

For issues or questions:
- Email: hello@paratec.io
- Check the SETUP_GUIDE.md for detailed instructions

## 📄 License

MIT License - feel free to use this as a template!

---

**Made with ❤️ using React + Vite + Tailwind CSS**
