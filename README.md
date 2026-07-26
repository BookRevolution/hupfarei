# Die Hupfarei - Single Page Site

Eine moderne, responsive Single-Page-Website für Die Hupfarei - Hüpfburg-Spaß für Kinder.

## 🚀 Features

- **Next.js 15** mit App Router
- **React 19** + TypeScript
- **Tailwind CSS v3** mit benutzerdefinierten Design-Tokens
- **Responsive Design** für alle Geräte
- **Smooth Scrolling** mit Intersection Observer
- **Netlify Forms** Integration
- **SEO optimiert** mit Meta-Tags
- **Accessibility** nach WCAG-Richtlinien

## 🛠️ Technologie-Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v3, CSS Variables
- **Icons**: Lucide React, Heroicons
- **Deployment**: Netlify mit @netlify/plugin-nextjs
- **Forms**: Netlify Forms mit Honeypot-Schutz

## 📁 Projektstruktur

```
.
├── app/                    # Next.js App Router
│   ├── globals.css        # Globale Styles & Tailwind
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Hauptseite
├── components/             # React Komponenten
│   ├── navbar.tsx         # Navigation
│   ├── hero.tsx           # Hero Section
│   ├── section.tsx        # Generische Section
│   ├── price-card.tsx     # Preiskarten
│   └── contact-form.tsx   # Kontaktformular
├── public/                 # Statische Assets
│   ├── logo.svg           # Logo
│   └── hero-animated.svg  # Hero Illustration
├── styles/                 # CSS & Design Tokens
│   └── tokens.css         # Brand CSS Variables
├── netlify.toml           # Netlify Konfiguration
├── tailwind.config.ts     # Tailwind Konfiguration
└── package.json           # Dependencies
```

## 🎨 Design System

### Farben
- **Brand Pink**: #FF7AC2
- **Brand Yellow**: #FFD166  
- **Brand Purple**: #6C63FF
- **Brand Mint**: #8BE8CB
- **Ink**: #232323
- **Background**: #FFF7FB

### Komponenten
- **Buttons**: Primär (Purple), Sekundär (Border)
- **Cards**: Mit Schatten und abgerundeten Ecken
- **Forms**: Fokus-Ringe und Hover-Effekte
- **Typography**: Hierarchische Textgrößen

## 🚀 Lokale Entwicklung

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Installation
```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build erstellen
npm run build

# Production Server starten
npm start

# Linting
npm run lint
```

### Umgebungsvariablen
Erstelle eine `.env.local` Datei für lokale Entwicklung:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🌐 Deployment

### Netlify Deployment

1. **Repository verbinden**
   - Verbinde dein Git-Repository mit Netlify
   - Wähle den Branch für automatische Deployments

2. **Build-Einstellungen**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 oder höher

3. **Plugin aktivieren**
   - Stelle sicher, dass `@netlify/plugin-nextjs` aktiv ist
   - Das Plugin wird automatisch installiert

4. **Umgebungsvariablen** (optional)
   ```env
   NODE_VERSION=18
   NPM_FLAGS=--legacy-peer-deps
   ```

### Netlify Forms

Das Kontaktformular funktioniert automatisch mit Netlify Forms:
- **Form Name**: `contact`
- **Honeypot**: `bot-field` für Spam-Schutz
- **Success Redirect**: `/?submitted=true`
- **Validation**: Client-seitige Validierung + HTML5 Validation

## 📱 Responsive Design

- **Mobile First** Ansatz
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** Buttons und Formulare
- **Mobile Navigation** mit Hamburger-Menü

## ♿ Accessibility

- **Semantic HTML** Struktur
- **ARIA Labels** für Screen Reader
- **Keyboard Navigation** Support
- **Focus Management** mit sichtbaren Fokus-Ringen
- **Color Contrast** nach WCAG AA Standards

## 🔧 Konfiguration

### Tailwind CSS
- Benutzerdefinierte Farben aus CSS Variables
- Container mit zentriertem Layout
- Custom Keyframes für Animationen
- Dark Mode Support (CSS Media Query)

### Next.js
- App Router für moderne Routing
- Image Optimization mit next/image
- TypeScript für bessere Entwicklererfahrung
- ESLint für Code-Qualität

## 📊 Performance

- **Lighthouse Score**: Ziel ≥90 in allen Kategorien
- **Image Optimization**: WebP Format + Lazy Loading
- **Code Splitting**: Automatisch durch Next.js
- **Bundle Analysis**: `npm run build` zeigt Bundle-Größen

## 🐛 Troubleshooting

### Häufige Probleme

1. **Build-Fehler**
   ```bash
   # Node Version prüfen
   node --version
   
   # Dependencies neu installieren
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Styling-Probleme**
   ```bash
   # Tailwind neu generieren
   npm run build
   ```

3. **Netlify Forms funktionieren nicht**
   - Prüfe `data-netlify="true"` Attribute
   - Verstecktes `form-name` Feld vorhanden
   - Honeypot-Feld korrekt implementiert

## 📝 Content Updates

### Texte ändern
Alle Texte sind in den React-Komponenten definiert:
- `components/hero.tsx` - Hero Section
- `components/price-card.tsx` - Preise
- `app/page.tsx` - Über uns & Footer

### Bilder ersetzen
- **Logo**: `/public/logo.svg` ersetzen
- **Hero Image**: `/public/hero-animated.svg` ersetzen
- **Favicon**: `/public/favicon.ico` hinzufügen

## 🔗 Links

- **Hauptseite**: https://www.diehupfarei.at/
- **Netlify**: https://www.netlify.com/
- **Next.js**: https://nextjs.org/
- **Tailwind CSS**: https://tailwindcss.com/

## 📄 Lizenz

© 2024 Die Hupfarei. Alle Rechte vorbehalten.

---

**Entwickelt mit ❤️ für Die Hupfarei**
