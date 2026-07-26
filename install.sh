#!/bin/bash

echo "🚀 Setting up Die Hupfarei project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "   Please update Node.js to version 18 or higher."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Project setup complete!"
    echo ""
    echo "Next steps:"
    echo "1. Start development server: npm run dev"
    echo "2. Open http://localhost:3000 in your browser"
    echo "3. Build for production: npm run build"
    echo ""
    echo "For deployment to Netlify:"
    echo "1. Push to Git repository"
    echo "2. Connect repository to Netlify"
    echo "3. Set build command: npm run build"
    echo "4. Set publish directory: .next"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
