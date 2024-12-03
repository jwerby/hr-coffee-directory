# Hampton Roads Coffee Directory

A production-ready, comprehensive directory of coffee establishments in Hampton Roads, Virginia. Features include real-time geolocation, advanced filtering, accessibility support, and detailed business information.

## 🚀 Features

- **Advanced Search & Filtering**
  - Real-time geolocation-based sorting
  - Multi-criteria filtering (type, location, features)
  - Full-text search with auto-suggestions
  - Price range and rating filters

- **Rich Business Data**
  - Detailed establishment profiles
  - Operating hours and contact information
  - Social media integration
  - Special badges (Veteran-owned, etc.)
  - Photos and virtual tours

- **User Experience**
  - Responsive design
  - Offline support (PWA)
  - Dark mode
  - Share functionality
  - Accessibility compliance (WCAG 2.1)

- **Performance**
  - Server-side rendering
  - Image optimization
  - Lazy loading
  - Analytics integration
  - Caching strategies

## 🛠 Tech Stack

- React 18 with TypeScript
- Next.js 13 for SSR/SSG
- Tailwind CSS for styling
- ShadcnUI components
- Tanstack Query for data fetching
- Zod for validation
- Vitest for testing
- Playwright for E2E testing

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hr-coffee-directory.git

# Install dependencies
cd hr-coffee-directory
pnpm install

# Set up environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

## 🗄️ Project Structure

```
hr-coffee-directory/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   └── features/       # Feature-specific components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── styles/             # Global styles
│   └── types/              # TypeScript definitions
├── public/                 # Static assets
├── tests/                 # Test files
└── docs/                  # Documentation
```

## 🔧 Configuration

The application can be configured through environment variables:

```env
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key_here
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 📈 Data Schema

Coffee establishment data follows this structure:

```typescript
interface CoffeeEstablishment {
  id: string;
  name: string;
  type: EstablishmentType;
  location: Location;
  contact: ContactInfo;
  hours: OperatingHours;
  features: Feature[];
  ratings: Rating;
  // ... (see types/coffee.d.ts for full schema)
}
```

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run e2e tests
pnpm test:e2e

# Run with coverage
pnpm test:coverage
```

## 📱 PWA Support

The application includes PWA support with:

- Service Worker for offline functionality
- App manifest
- Icon assets
- Installation prompt

## 🔒 Security

- HTTPS enforced
- Content Security Policy
- Rate limiting
- Input sanitization
- CORS configuration

## 🎨 Design System

Components follow the [System UI theme specification](https://system-ui.com/theme):

- Consistent spacing scale
- Typography system
- Color palette
- Component variants

## 📊 Analytics

Integrated analytics tracking:

- Page views
- Search queries
- Filter usage
- Share events
- Error tracking

## 🚥 API Routes

```typescript
// Establishments
GET /api/establishments
GET /api/establishments/:id
POST /api/establishments/search

// Reviews
GET /api/reviews/:establishmentId
POST /api/reviews

// Search
GET /api/search?q=:query
```

## 📈 Performance Metrics

- Lighthouse score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Core Web Vitals compliance

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🙏 Acknowledgments

- Data providers
- Contributors
- Open source libraries

## 📞 Support

- Create an issue
- Email: support@hrcoffee.directory
- Discord community