# ParaTec Local Development Setup Guide

## ✅ Project Ready to Download

Your ParaTec project has been created and is ready to use on your local machine!

### Project Location (Server)
```
~/paratec-project/
```

## 📋 What You Have

Complete React + Vite + Tailwind project with:
- ✨ Modern, responsive design
- 🎨 Dark theme with Luna blue color scheme
- 📱 Mobile-first responsive layout
- 🎯 Smooth scroll animations
- 🔧 All build tools configured

### Project Structure
```
paratec-project/
├── src/
│   ├── components/
│   │   └── NeuralNetwork.jsx          # Canvas animation
│   ├── App.jsx                        # Main app component
│   ├── index.css                      # Global styles & theme
│   └── main.jsx                       # React entry point
├── index.html                         # HTML entry
├── package.json                       # Dependencies
├── vite.config.js                     # Build config
├── eslint.config.js                   # Linting
├── .gitignore                         # Git ignore rules
├── README.md                          # Full documentation
└── SETUP_GUIDE.md                     # This file
```

## 🚀 Getting Started on Your Computer

### Step 1: Download the Project
Download or copy the `paratec-project` folder to your computer.

### Step 2: Open Terminal/Command Prompt
Navigate to the project folder:
```bash
cd path/to/paratec-project
```

### Step 3: Install Dependencies
```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- ESLint (linting)

### Step 4: Start Development Server
```bash
npm run dev
```

Output will show:
```
  VITE v8.0.1  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### Step 5: Open in Browser
Visit: **http://localhost:5173/**

🎉 Your ParaTec site is now running locally!

## ✏️ Making Edits

### Edit Content
The entire site is in `src/App.jsx`. Find sections by their section ID comments:

| Section | Lines | Key Elements |
|---------|-------|--------------|
| Navbar | ~48-134 | Links, Book Now button |
| Hero | ~138-221 | Main headline, CTAs |
| About | ~230-267 | About cards |
| Services | ~275-349 | Service categories |
| Live Roles | ~357-426 | Job listings |
| Contact | ~434-599 | Contact form |
| Footer | ~607-720 | Footer content |

**Example: Changing Hero Headline**

Find line ~166 in `src/App.jsx`:
```jsx
Recruitment for the Future of{' '}
<span className="text-luna">Web3</span>,{' '}
<span className="text-luna">Machine Learning</span> and{' '}
<span className="text-luna">Quant Finance</span>
```

Edit the text and save. Vite will hot-reload automatically! 🔄

### Edit Styling
Global styles & custom theme in `src/index.css`:

**Change Primary Color (Luna Blue):**
```css
@theme {
  --color-luna: #4A90D9;        /* Change this */
  --color-luna-light: #6BA3E0;
  --color-luna-dark: #3A7BC8;
  ...
}
```

**Change Fonts:**
```css
@theme {
  --font-sans: 'Inter', system-ui, sans-serif;      /* Body font */
  --font-display: 'Space Grotesk', 'Inter', ...;   /* Display font */
}
```

### Edit Components
- **Neural Network Animation**: `src/components/NeuralNetwork.jsx`
  - Adjust node count: `Math.min(count, 80)` → change 80
  - Connection distance: `if (dist < 150)` → change 150
  - Animation speed: `node.vx * 0.4` → adjust 0.4

### Add New Content
**Example: Add a new service card**

In `src/App.jsx`, find the Services section (~275) and add to the array:
```jsx
{
  icon: YourIcon,
  title: 'New Service',
  roles: ['Role 1', 'Role 2', 'Role 3'],
},
```

## 🔄 Live Preview

Vite provides **instant Hot Module Replacement (HMR)**:
- Save a file → Browser updates automatically
- No refresh needed!

## 📦 Available Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

## 🚢 Deploy to Vercel

### Option 1: Connect GitHub Repo
1. Push code to GitHub
2. Go to vercel.com/new
3. Import your repo
4. Vercel auto-detects Vite
5. Deploy! 🚀

### Option 2: Deploy from CLI
```bash
npm install -g vercel
vercel
```

**Vercel will auto-configure:**
- Build Command: `vite build`
- Output Directory: `dist`
- Install Command: `npm install`

## 🎨 Customization Checklist

- [ ] Change primary color (Luna blue)
- [ ] Update hero headline
- [ ] Add/remove service categories
- [ ] Update job listings
- [ ] Change contact information
- [ ] Update company links (LinkedIn, email)
- [ ] Customize footer text
- [ ] Add your favicon (replace `/favicon.svg`)

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Module Not Found
If you get `Cannot find module 'react'`:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Check for syntax errors by running:
```bash
npm run lint
```

## 📚 Resources

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Lucide Icons**: https://lucide.dev

## 💡 Tips

1. **Keyboard Shortcut**: Press `h` in dev server for help
2. **React DevTools**: Install browser extension for debugging
3. **Console Errors**: Check browser console (F12) for errors
4. **Responsive Testing**: Use browser DevTools (F12 → toggle device toolbar)

## 📞 Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ✅ Open in browser
4. ✅ Make your edits
5. ✅ Push to GitHub
6. ✅ Deploy to Vercel

---

**Happy coding! 🚀**

For questions or issues, check the README.md in the project root.
