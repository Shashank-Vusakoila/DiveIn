#!/bin/bash

# DiveIn Agency Website - Quick Start Script
# This script helps you get started with the DiveIn project

echo "🚀 DiveIn Agency Website - Quick Start"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ NPM version: $(npm --version)"
echo ""

# Navigate to project directory
cd /workspaces/DiveIn/Frotend || exit 1

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed!"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🎯 Available commands:"
echo "  npm run dev     - Start development server (http://localhost:3000)"
echo "  npm run build   - Build for production"
echo "  npm start       - Start production server"
echo "  npm run lint    - Run ESLint"
echo ""

echo "📂 Project Structure:"
echo "  src/app/          - Next.js App Router pages"
echo "  src/components/   - React components"
echo "  src/lib/          - Utilities and constants"
echo ""

echo "📚 Documentation:"
echo "  README.md   - Project overview and features"
echo "  SETUP.md    - Complete setup and deployment guide"
echo ""

echo "🎨 Customization Tips:"
echo "  1. Colors: tailwind.config.ts"
echo "  2. Content: src/lib/constants.ts"
echo "  3. Email: src/components/Contact.tsx"
echo ""

echo "🚀 Ready to start development?"
echo "Run: npm run dev"
echo ""
