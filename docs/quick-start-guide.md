# Quick Start Guide - Fractional CMO Website

## 🚀 **Get Started in 30 Minutes**

### **Step 1: Set Up Your Development Environment (10 minutes)**

1. **Install Node.js** (if not already installed)
   ```bash
   # Check if Node.js is installed
   node --version
   
   # If not installed, download from https://nodejs.org/
   # Choose LTS version (v18 or higher)
   ```

2. **Create a new directory for your website**
   ```bash
   mkdir fractional-cmo-website
   cd fractional-cmo-website
   ```

3. **Initialize Next.js project**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
   ```

### **Step 2: Configure Your Project (10 minutes)**

1. **Install additional dependencies**
   ```bash
   npm install @supabase/supabase-js @sanity/client framer-motion lucide-react zustand
   ```

2. **Create basic project structure**
   ```bash
   mkdir -p src/components src/lib src/types src/hooks
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   touch .env.local
   ```

   Add to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SANITY_PROJECT_ID=your_sanity_project_id
   SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_token
   ```

### **Step 3: Create Your First Component (10 minutes)**

1. **Create a basic layout component**
   ```bash
   touch src/components/Layout.tsx
   ```

2. **Add this code to Layout.tsx**:
   ```tsx
   import { ReactNode } from 'react';
   import Header from './Header';
   import Footer from './Footer';

   interface LayoutProps {
     children: ReactNode;
   }

   export default function Layout({ children }: LayoutProps) {
     return (
       <div className="min-h-screen bg-white">
         <Header />
         <main className="flex-1">
           {children}
         </main>
         <Footer />
       </div>
     );
   }
   ```

3. **Update your main page** (`src/app/page.tsx`):
   ```tsx
   import Layout from '@/components/Layout';

   export default function Home() {
     return (
       <Layout>
         <div className="container mx-auto px-4 py-8">
           <h1 className="text-4xl font-bold text-blue-600 mb-4">
             Strategic Clarity Without the Corporate Stiffness
           </h1>
           <p className="text-lg text-gray-700 mb-8">
             Transform your marketing from "meh" to "wow" with strategies that actually work.
           </p>
           <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
             Let's Make Magic Together ✨
           </button>
         </div>
       </Layout>
     );
   }
   ```

4. **Start your development server**
   ```bash
   npm run dev
   ```

5. **Visit http://localhost:3000** to see your website!

## 🎯 **Next Steps (This Week)**

### **Day 1: Foundation**
- [ ] Complete the quick start above
- [ ] Set up Supabase project (https://supabase.com)
- [ ] Set up Sanity project (https://sanity.io)
- [ ] Create GitHub repository

### **Day 2: Design System**
- [ ] Create color palette variables
- [ ] Set up typography system
- [ ] Build basic components (Button, Card, Input)
- [ ] Create responsive utilities

### **Day 3: Core Pages**
- [ ] Build landing page hero section
- [ ] Create about page structure
- [ ] Add navigation component
- [ ] Implement mobile menu

### **Day 4: Content & CMS**
- [ ] Set up Sanity schemas
- [ ] Create blog post template
- [ ] Add content management
- [ ] Set up image optimization

### **Day 5: Functionality**
- [ ] Add contact form
- [ ] Implement newsletter signup
- [ ] Set up analytics
- [ ] Add SEO optimization

## 🛠️ **Essential Tools Setup**

### **1. Supabase Setup**
1. Go to https://supabase.com
2. Create new project
3. Get your project URL and anon key
4. Add to `.env.local`

### **2. Sanity Setup**
1. Go to https://sanity.io
2. Create new project
3. Get your project ID and token
4. Add to `.env.local`

### **3. Vercel Setup**
1. Go to https://vercel.com
2. Connect your GitHub repository
3. Deploy automatically

### **4. Domain Setup**
1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Point to Vercel
3. Set up SSL certificate

## 📱 **Mobile-First Development**

### **Responsive Breakpoints**
```css
/* Tailwind CSS breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

### **Mobile Testing**
- Test on actual devices
- Use Chrome DevTools
- Check touch interactions
- Verify loading speeds

## 🎨 **Design System Quick Start**

### **Color Palette**
```css
:root {
  --primary-blue: #00a6e3;
  --primary-dark: #002848;
  --accent-pink: #ec008b;
  --neutral-light: #abd6f2;
  --surprise-gold: #FFD700;
  --joy-coral: #FF6B6B;
}
```

### **Typography**
```css
/* Add to your global CSS */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

### **Component Examples**
```tsx
// Button component
export function Button({ children, variant = 'primary', ...props }) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-pink-500 hover:bg-pink-600 text-white',
    ghost: 'border border-gray-300 hover:bg-gray-50 text-gray-700'
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
```

## 📊 **Analytics Setup**

### **Google Analytics 4**
1. Create GA4 property
2. Get measurement ID
3. Add to your app:

```tsx
// Add to _app.tsx or layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 🔧 **Common Issues & Solutions**

### **Issue: Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### **Issue: Environment Variables Not Working**
- Make sure `.env.local` is in root directory
- Restart development server
- Check variable names (must start with `NEXT_PUBLIC_` for client-side)

### **Issue: Styling Not Applied**
- Check Tailwind CSS configuration
- Verify class names are correct
- Clear browser cache

### **Issue: Images Not Loading**
- Use Next.js Image component
- Check image paths
- Verify image optimization settings

## 📚 **Learning Resources**

### **Next.js**
- [Official Documentation](https://nextjs.org/docs)
- [Tutorial](https://nextjs.org/learn)

### **Tailwind CSS**
- [Documentation](https://tailwindcss.com/docs)
- [Components](https://tailwindui.com)

### **TypeScript**
- [Handbook](https://www.typescriptlang.org/docs)
- [React with TypeScript](https://react-typescript-cheatsheet.netlify.app)

### **Supabase**
- [Documentation](https://supabase.com/docs)
- [Tutorials](https://supabase.com/docs/guides/tutorials)

## 🎯 **Success Checklist**

### **Week 1 Goals**
- [ ] Development environment working
- [ ] Basic website running locally
- [ ] Supabase and Sanity connected
- [ ] First page deployed to Vercel
- [ ] Mobile-responsive design

### **Week 2 Goals**
- [ ] All core pages built
- [ ] Contact form working
- [ ] Blog system functional
- [ ] SEO basics implemented
- [ ] Analytics tracking

### **Week 3 Goals**
- [ ] Content published
- [ ] Lead magnets created
- [ ] Email marketing set up
- [ ] Performance optimized
- [ ] User testing completed

---

**Remember**: Start small, iterate quickly, and focus on getting something working first. You can always improve and add features later!

**Need Help?**: Check the documentation, join developer communities, or reach out for support when you get stuck.


