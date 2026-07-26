# Foto-Upload-Formular - Anleitung

## Was wurde hinzugefügt?

✅ **Neues Foto-Upload-Formular** - Speziell für Kunden, die Fotos senden möchten  
✅ **Gmail-Integration** - Funktioniert direkt über den E-Mail-Client  
✅ **Event-Details** - Sammelt wichtige Informationen über das Event  
✅ **Benutzerfreundlich** - Schritt-für-Schritt-Anleitung für den Foto-Upload  

## Wo ist es verfügbar?

- **Neue Sektion**: "Fotos senden" zwischen Fotogalerie und Preisen
- **Direkter Link**: Button "📮 Fotos senden" in der Fotogalerie
- **URL-Anker**: #foto-upload

## Wie funktioniert es?

1. **Kunde füllt das Formular aus** mit:
   - Name, E-Mail, Telefon
   - Event-Datum und Event-Typ
   - Optionale Nachricht

2. **Kunde klickt auf "📸 Fotos senden"**

3. **Gmail öffnet sich automatisch** mit:
   - Empfänger: office@diehupfarei.at
   - Betreff: "Foto-Upload: [Event-Typ] von [Name]"
   - Vorformatierter E-Mail-Text mit allen Informationen

4. **Kunde fügt Fotos als Anhang hinzu** und sendet die E-Mail

## Vorteile der Lösung:

- **Keine externe Einrichtung nötig**
- **Funktioniert sofort** mit jedem E-Mail-Client
- **Professionelle E-Mail-Formatierung**
- **Alle wichtigen Informationen werden gesammelt**
- **Kunde behält volle Kontrolle** über die Fotos

## Testen:

1. **Lokaler Server läuft** unter http://localhost:3000
2. **Gehen Sie zur Fotogalerie** und klicken Sie auf "📮 Fotos senden"
3. **Testen Sie das Formular** - Gmail sollte sich öffnen
4. **Alle Felder haben sichtbare Schriftfarbe** (text-gray-900)

## Deployment:

Nach dem Testen:
1. **Website bauen**: `npm run build`
2. **Zu Webnode hochladen**: Den Inhalt des `out/` Ordners hochladen
3. **Funktioniert dann auch auf der Live-Website!**

---

**Das Foto-Upload-Formular ist jetzt bereit! 🎉📸**

## Website-Adresse aktualisiert!

✅ **Alle Verweise wurden aktualisiert** von der alten auf die neue Website-Adresse  
✅ **Neue Website**: https://diehupfarei.at/  
✅ **Sitemap aktualisiert** mit der neuen Adresse  
✅ **Robots.txt aktualisiert** mit der neuen Sitemap-URL
