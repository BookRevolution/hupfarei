# 🚀 Quick Start Guide - Die Hupfarei

## ⚡ In 5 Minuten zum Laufen

### 1. Node.js installieren (falls nicht vorhanden)
```bash
# macOS mit Homebrew
brew install node

# Oder von https://nodejs.org/ herunterladen
```

### 2. Projekt starten
```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

### 3. Browser öffnen
- Gehe zu: http://localhost:3000
- Die Website sollte jetzt laufen! 🎉

## 🔧 Was funktioniert bereits?

✅ **Vollständige Single-Page-Website** mit allen Sektionen  
✅ **Responsive Design** für Mobile, Tablet & Desktop  
✅ **Smooth Scrolling** zwischen den Bereichen  
✅ **Kontaktformular** mit Netlify Forms Integration  
✅ **Moderne UI** mit Tailwind CSS & Brand-Farben  
✅ **TypeScript** für bessere Code-Qualität  
✅ **SEO optimiert** mit Meta-Tags  

## 🎨 Anpassungen

### Logo ändern
- Ersetze `/public/logo.svg` mit deinem Logo
- Oder ändere den Pfad in `components/navbar.tsx`

### Farben anpassen
- Bearbeite `styles/tokens.css` für neue Brand-Farben
- Alle Komponenten verwenden automatisch die neuen Farben

### Texte ändern
- Alle Texte sind in den React-Komponenten definiert
- Einfach die Strings in den entsprechenden Dateien bearbeiten

## 🌐 Deployment

### Netlify (empfohlen)
1. Code zu Git pushen
2. Repository mit Netlify verbinden
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Fertig! 🚀

### Andere Hosting-Provider
- `npm run build` ausführen
- `.next` Ordner hochladen
- Oder `npm start` für Node.js-Hosting

## 📱 Testen

### Responsive Design
- Browser-Fenster in der Größe ändern
- Mobile Ansicht in DevTools testen
- Touch-Gesten auf Mobile-Geräten prüfen

### Funktionalität
- Navigation zwischen Sektionen testen
- Kontaktformular ausfüllen
- Smooth Scrolling prüfen
- Mobile-Menü öffnen/schließen

## 🐛 Häufige Probleme

### "Module not found" Fehler
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling funktioniert nicht
```bash
npm run build
npm run dev
```

### Port bereits belegt
```bash
# Anderen Port verwenden
npm run dev -- -p 3001
```

## 📞 Support

Bei Fragen oder Problemen:
- README.md für detaillierte Dokumentation
- GitHub Issues für Bug-Reports
- Netlify Support für Deployment-Fragen

---

**Viel Spaß mit deiner neuen Website! 🎈**
