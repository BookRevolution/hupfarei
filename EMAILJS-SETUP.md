# EmailJS Einrichtung - Einfach und kostenlos!

## ✅ Das funktioniert sofort!

### Schritt 1: EmailJS-Konto erstellen
1. **Gehen Sie zu [emailjs.com](https://www.emailjs.com/)**
2. **Klicken Sie auf "Get Started Free"**
3. **Erstellen Sie ein kostenloses Konto**

### Schritt 2: E-Mail-Service einrichten
1. **Gehen Sie zu "Email Services"**
2. **Klicken Sie auf "Add New Service"**
3. **Wählen Sie "Gmail" aus**
4. **Geben Sie Ihre Gmail-Daten ein**
5. **Kopieren Sie die "Service ID"**

### Schritt 3: E-Mail-Vorlage erstellen
1. **Gehen Sie zu "Email Templates"**
2. **Klicken Sie auf "Create New Template"**
3. **Erstellen Sie eine Vorlage mit diesen Variablen:**
   - `{{to_email}}` - Empfänger
   - `{{from_name}}` - Name des Absenders
   - `{{from_email}}` - E-Mail des Absenders
   - `{{phone}}` - Telefonnummer
   - `{{message}}` - Nachricht
   - `{{subject}}` - Betreff
4. **Kopieren Sie die "Template ID"**

### Schritt 4: User ID finden
1. **Gehen Sie zu "Account" → "API Keys"**
2. **Kopieren Sie Ihre "Public Key"**

### Schritt 5: Codes aktualisieren
Ersetzen Sie in `components/contact-form.tsx`:
- `service_12345` → Ihre Service ID
- `template_12345` → Ihre Template ID  
- `user_12345` → Ihr Public Key

## ✅ Fertig!

Dann funktioniert das Kontaktformular perfekt:
- ✅ **Kein Fenster öffnet sich mehr**
- ✅ **E-Mails werden direkt an diehupfarei@gmail.com versendet**
- ✅ **Funktioniert sofort nach der Einrichtung**

**Das ist die einfachste und zuverlässigste Lösung!** 🚀
