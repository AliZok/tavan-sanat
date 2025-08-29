# WhatsApp Plugin Components

This project includes three different WhatsApp plugin components to help clients connect to the phone number `+989120628762`.

## Components

### 1. WhatsAppPlugin (`src/components/WhatsAppPlugin.tsx`)
A simple floating WhatsApp button with customizable options.

**Features:**
- Floating button with text label
- Customizable position
- Hover tooltip
- Pre-filled message support

**Usage:**
```tsx
import WhatsAppPlugin from '../components/WhatsAppPlugin';

// Basic usage
<WhatsAppPlugin />

// With custom props
<WhatsAppPlugin 
  phoneNumber="+989120628762"
  message="سلام، می‌خواهم در مورد خدمات شما اطلاعات بیشتری کسب کنم."
  position="bottom-right"
  showText={true}
/>
```

**Props:**
- `phoneNumber` (string, optional): WhatsApp phone number (default: "+989120628762")
- `message` (string, optional): Pre-filled message (default: Persian greeting)
- `position` (string, optional): Button position - "bottom-right", "bottom-left", "top-right", "top-left" (default: "bottom-right")
- `showText` (boolean, optional): Show text label next to icon (default: true)

### 2. WhatsAppButton (`src/components/WhatsAppButton.tsx`)
A simple circular WhatsApp button with pulse animation.

**Features:**
- Circular design with pulse animation
- Multiple size options
- Hover effects and tooltip
- Clean and minimal design

**Usage:**
```tsx
import WhatsAppButton from '../components/WhatsAppButton';

// Basic usage
<WhatsAppButton />

// With custom props
<WhatsAppButton 
  phoneNumber="+989120628762"
  message="سلام، می‌خواهم در مورد خدمات شما اطلاعات بیشتری کسب کنم."
  position="bottom-right"
  size="large"
/>
```

**Props:**
- `phoneNumber` (string, optional): WhatsApp phone number (default: "+989120628762")
- `message` (string, optional): Pre-filled message (default: Persian greeting)
- `position` (string, optional): Button position (default: "bottom-right")
- `size` (string, optional): Button size - "small", "medium", "large" (default: "medium")

### 3. WhatsAppContact (`src/components/WhatsAppContact.tsx`)
A comprehensive contact solution with modal form and multiple contact options.

**Features:**
- Modal contact form
- Multiple contact methods (WhatsApp, Phone, Email)
- Form validation
- Professional design with RTL support
- Contact information display

**Usage:**
```tsx
import WhatsAppContact from '../components/WhatsAppContact';

// Basic usage
<WhatsAppContact />

// With custom props
<WhatsAppContact 
  phoneNumber="+989120628762"
  email="info@tavan-sanat.com"
  position="bottom-right"
/>
```

**Props:**
- `phoneNumber` (string, optional): Contact phone number (default: "+989120628762")
- `email` (string, optional): Contact email (default: "info@tavan-sanat.com")
- `position` (string, optional): Button position (default: "bottom-right")

## Installation

The components are already included in the project. To use them:

1. Import the desired component in your page or component file
2. Add the component to your JSX
3. Customize props as needed

## Example Implementation

The WhatsAppContact component is already implemented in the services page:

```tsx
// src/app/[locale]/services/page.tsx
import WhatsAppContact from '../../../components/WhatsAppContact';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white" dir="rtl">
      <Header />
      <WhatsAppContact />
      {/* Rest of the page content */}
    </div>
  );
}
```

## Styling

All components use Tailwind CSS for styling and are fully responsive. They include:
- Hover effects and animations
- RTL (Right-to-Left) support for Persian text
- Mobile-friendly design
- Accessibility features (aria-labels)

## Customization

You can customize the components by:
1. Modifying the default props in the component files
2. Passing custom props when using the components
3. Adjusting the Tailwind classes for styling
4. Adding additional functionality as needed

## Browser Compatibility

The components work in all modern browsers and use the WhatsApp Web API (`wa.me`) for opening WhatsApp conversations.
