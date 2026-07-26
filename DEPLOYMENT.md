# 🚀 Deployment Checklist - Die Hupfarei

## ✅ Vor dem Deployment

- [ ] Node.js 18+ installiert
- [ ] Alle Dependencies installiert (`npm install`)
- [ ] Lokaler Build funktioniert (`npm run build`)
- [ ] Lokaler Test erfolgreich (`npm run dev`)
- [ ] Code zu Git gepusht

## 🌐 Netlify Deployment

### 1. Repository verbinden
- [ ] Netlify Account erstellen/anmelden
- [ ] "New site from Git" wählen
- [ ] GitHub/GitLab/Bitbucket Repository verbinden
- [ ] Branch für Deployments wählen (meist `main` oder `master`)

### 2. Build-Einstellungen
- [ ] **Build command**: `npm run build`
- [ ] **Publish directory**: `.next`
- [ ] **Node version**: 18 oder höher
- [ ] **NPM version**: 9 oder höher

### 3. Umgebungsvariablen (optional)
```env
NODE_VERSION=18
NPM_FLAGS=--legacy-peer-deps
NEXT_PUBLIC_SITE_URL=https://deine-domain.netlify.app
```

### 4. Domain & SSL
- [ ] Custom Domain konfiguriert (falls gewünscht)
- [ ] SSL-Zertifikat aktiviert (automatisch bei Netlify)
- [ ] HTTPS Redirect aktiviert

## 🔧 Nach dem Deployment

### 1. Funktionstest
- [ ] Website lädt korrekt
- [ ] Alle Sektionen sind sichtbar
- [ ] Navigation funktioniert
- [ ] Smooth Scrolling funktioniert
- [ ] Kontaktformular funktioniert
- [ ] Mobile-Ansicht funktioniert

### 2. Performance-Check
- [ ] Lighthouse Score ≥90
- [ ] PageSpeed Insights ≥90
- [ ] Core Web Vitals im grünen Bereich
- [ ] Bilder werden korrekt geladen

### 3. SEO & Accessibility
- [ ] Meta-Tags sind korrekt
- [ ] Title & Description stimmen
- [ ] Alt-Texte für Bilder vorhanden
- [ ] Semantic HTML korrekt
- [ ] ARIA-Labels vorhanden

## 📱 Mobile Testing

### Responsive Design
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Touch-Gesten funktionieren
- [ ] Mobile-Menü öffnet sich

### Browser-Kompatibilität
- [ ] Chrome (neueste Version)
- [ ] Firefox (neueste Version)
- [ ] Safari (neueste Version)
- [ ] Edge (neueste Version)

## 🔒 Sicherheit & Performance

### Security Headers
- [ ] X-Frame-Options: DENY
- [ ] X-XSS-Protection: 1; mode=block
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy: strict-origin-when-cross-origin

### Performance
- [ ] Gzip/Brotli Kompression aktiviert
- [ ] Browser Caching konfiguriert
- [ ] CDN aktiviert (falls verfügbar)
- [ ] Image Optimization aktiviert

## 📊 Monitoring & Analytics

### Tools einrichten
- [ ] Google Analytics (falls gewünscht)
- [ ] Google Search Console
- [ ] Netlify Analytics
- [ ] Error Tracking (Sentry, etc.)

### Uptime Monitoring
- [ ] Website-Überwachung aktiviert
- [ ] Alerts bei Ausfällen konfiguriert
- [ ] Performance-Monitoring aktiviert

## 🚨 Troubleshooting

### Häufige Probleme

#### Build schlägt fehl
```bash
# Lokal testen
npm run build

# Node Version prüfen
node --version

# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install
```

#### Styling funktioniert nicht
- Tailwind CSS neu generieren
- Browser-Cache leeren
- CSS-Dateien prüfen

#### Forms funktionieren nicht
- `data-netlify="true"` Attribute prüfen
- Honeypot-Feld vorhanden
- Form-Name korrekt gesetzt

#### Images werden nicht geladen
- Pfade korrekt
- Dateien im `public/` Ordner
- Next.js Image-Konfiguration prüfen

## 📞 Support

### Netlify Support
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Community](https://community.netlify.com/)
- [Netlify Status](https://status.netlify.com/)

### Next.js Support
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)
- [Vercel Community](https://github.com/vercel/next.js/discussions)

---

**Deployment erfolgreich! 🎉**

Deine Website ist jetzt live und bereit für Besucher!
