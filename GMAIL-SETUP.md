# Gmail SMTP Einrichtung

## ✅ Funktioniert sofort mit Ihrem Gmail-Konto!

### Schritt 1: Gmail App-Passwort erstellen

1. **Gehen Sie zu [myaccount.google.com](https://myaccount.google.com/)**
2. **Klicken Sie auf "Sicherheit"**
3. **Aktivieren Sie "2-Schritt-Verifizierung"** (falls noch nicht aktiviert)
4. **Gehen Sie zu "App-Passwörter"**
5. **Wählen Sie "Mail" aus dem Dropdown**
6. **Klicken Sie auf "Generieren"**
7. **Kopieren Sie das 16-stellige Passwort**

### Schritt 2: App-Passwort in den Code einfügen

Öffnen Sie die Datei `app/api/send-email/route.ts` und ersetzen Sie:

```typescript
pass: 'ihr_app_passwort_hier' // Ihr Gmail App-Passwort
```

mit Ihrem echten App-Passwort:

```typescript
pass: 'abcd efgh ijkl mnop' // Ihr 16-stelliges App-Passwort
```

### Schritt 3: Server neu starten

```bash
npm run dev
```

## ✅ Fertig!

Jetzt funktioniert das Kontaktformular perfekt:
- ✅ **Kein Fenster öffnet sich mehr**
- ✅ **E-Mails werden direkt an diehupfarei@gmail.com gesendet**
- ✅ **Sie erhalten alle Kontaktanfragen sofort**
- ✅ **Funktioniert mit Ihrem bestehenden Gmail-Konto**

## 🔒 Sicherheit

- Das App-Passwort ist nur für diese Anwendung
- Sie können es jederzeit widerrufen
- Normales Gmail-Passwort bleibt sicher

**Testen Sie es jetzt - alle E-Mails kommen direkt in Ihrem Gmail-Postfach an!** 🚀

