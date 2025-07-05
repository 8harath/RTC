# RTC Construction Company Website

A modern, responsive website for Ravitaj Constructions (RTC), built with Next.js 14, TypeScript, and Tailwind CSS. This website showcases construction projects, property listings, and provides an interactive EMI calculator for potential buyers.

## 🏗️ About RTC

Since 2021, RTC has been at the forefront of premium construction solutions, delivering excellence in:

- **Residential Construction** - Luxury apartments and housing complexes
- **Industrial Construction** - Manufacturing facilities and industrial units  
- **Hospitality Projects** - Hotels and hospitality spaces
- **Interior Design** - Corporate office interiors and custom designs

## ✨ Features

### 🏠 Property Showcase
- Interactive property listings with detailed specifications
- High-quality image galleries
- Price details and location information
- Filter properties by category (residential, industrial, hospitality, interior)

### 💰 EMI Calculator
- Real-time EMI calculation based on loan amount, interest rate, and tenure
- Interactive sliders for easy parameter adjustment
- Instant results display

### 📱 Modern UI/UX
- Fully responsive design for all devices
- Smooth animations with Framer Motion
- Dark/Light theme support
- Mobile-first approach

### 🎨 Component Library
- Built with Shadcn/UI components
- Consistent design system
- Reusable UI components
- Accessible and modern interface

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - Latest React features

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern component library
- **Radix UI** - Accessible primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Form Handling & Validation
- **React Hook Form** - Performant forms
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Additional Libraries
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Conditional styling
- **cmdk** - Command palette
- **date-fns** - Date manipulation
- **embla-carousel-react** - Carousel component
- **input-otp** - OTP input component
- **react-day-picker** - Date picker
- **react-resizable-panels** - Resizable layouts
- **recharts** - Chart library
- **sonner** - Toast notifications
- **vaul** - Drawer component

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page (RTC Landing)
├── components/            # React components
│   ├── ui/               # Shadcn/UI components
│   └── theme-provider.tsx # Theme configuration
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
├── components.json       # Shadcn/UI configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Clone & Install
```bash
# Clone the repository
git clone [repository-url]
cd RTC

# Install dependencies
pnpm install
# or
npm install
```

### Development
```bash
# Start development server
pnpm dev
# or
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production
```bash
# Build the application
pnpm build
# or
npm run build

# Start production server
pnpm start
# or
npm start
```

## 🎨 UI Components

The project uses Shadcn/UI components including:

- **Layout**: Card, Separator, Aspect Ratio, Resizable
- **Navigation**: Breadcrumb, Menu, Navigation Menu, Pagination
- **Forms**: Button, Input, Textarea, Select, Checkbox, Radio Group, Slider
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Overlay**: Dialog, Sheet, Popover, Tooltip, Hover Card
- **Data Display**: Table, Badge, Avatar, Calendar, Chart
- **Interactive**: Accordion, Tabs, Carousel, Command, Toggle

## 📧 Contact Information

- **Email**: info@rtconstructions.com
- **Website**: [Company Website]
- **Location**: Bangalore, India

## 🔧 Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## 📝 Key Features Implemented

### 1. Project Portfolio
- Showcase of completed and ongoing projects
- Categorized by type (residential, industrial, hospitality, interior)
- Detailed project information with images

### 2. Property Listings
- RTC Grandeur and RTC Elite properties
- Comprehensive property details
- Price and specification information

### 3. EMI Calculator
- Interactive loan calculator
- Real-time EMI computation
- Adjustable parameters with sliders

### 4. Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface

### 5. Modern Animations
- Scroll-based animations
- Smooth transitions
- Interactive hover effects

## 🚀 Deployment

This project is ready for deployment on platforms like:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

## 📄 License

This project is private and proprietary to Ravitej Constructions (RTC).

## 🤝 Contributing

This is a private company website. For any contributions or modifications, please contact the development team.

---

Built with ❤️ for Ravitej Constructions (RTC) - Excellence in Construction Since 2021
