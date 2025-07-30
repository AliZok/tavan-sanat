# AirSense Analytics - Multilingual Website

A modern, responsive website for AirSense Analytics with full internationalization support for English and Persian languages.

## Features

- 🌍 **Bilingual Support**: Full English and Persian (فارسی) language support
- 📱 **Responsive Design**: Optimized for all device sizes
- 🎨 **Modern UI**: Beautiful, professional design with smooth animations
- 🔄 **RTL Support**: Complete right-to-left layout support for Persian
- 🎯 **SEO Optimized**: Proper meta tags and structured content
- ⚡ **Performance**: Built with Next.js 15 and optimized for speed

## Language Support

### English (en)
- Default language
- Left-to-right (LTR) layout
- Latin font family

### Persian (فارسی) (fa)
- Right-to-left (RTL) layout
- Vazirmatn font for optimal Persian text rendering
- Proper number formatting (Persian numerals)
- Culturally appropriate translations

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tavan-sanat
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
   - English: http://localhost:3000/en
   - Persian: http://localhost:3000/fa

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── layout.tsx      # Locale-specific layout
│   │   └── page.tsx        # Main page component
│   ├── globals.css         # Global styles with RTL support
│   └── layout.tsx          # Root layout
├── components/
│   └── LanguageSwitcher.tsx # Language switching component
├── lib/
│   └── i18n.ts            # Internationalization utilities
├── locales/
│   ├── en.json            # English translations
│   └── fa.json            # Persian translations
└── middleware.ts          # Locale detection middleware
```

## Internationalization Features

### Translation Files
- Located in `src/locales/`
- JSON format for easy maintenance
- Structured by sections (header, hero, features, etc.)

### Language Switching
- Globe icon in the header navigation
- Dropdown menu with language options
- Maintains current page when switching languages

### RTL Support
- Automatic direction switching for Persian
- Proper margin and padding adjustments
- Persian font optimization

### Locale Detection
- Browser language preference detection
- Cookie-based language persistence
- Automatic redirects to appropriate locale

## Customization

### Adding New Languages

1. Create a new translation file in `src/locales/` (e.g., `ar.json`)
2. Add the locale to the `locales` array in `next.config.ts`
3. Update the `getDirection` function in `src/lib/i18n.ts`
4. Add language options to the LanguageSwitcher component

### Modifying Translations

Edit the JSON files in `src/locales/`:
- `en.json` for English translations
- `fa.json` for Persian translations

### Styling

The CSS includes comprehensive RTL support:
- Automatic margin/padding direction switching
- Persian font optimization
- Animation support for both directions

## Build and Deployment

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Vazirmatn**: Persian font family

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test in both languages
5. Submit a pull request

## License

This project is licensed under the MIT License.
