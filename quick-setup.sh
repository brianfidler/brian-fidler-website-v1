#!/bin/bash

# Quick Setup Script for New Projects
# This script sets up everything needed for a new project

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

echo "⚡ Quick Setup for New Project"
echo "============================="
echo ""

# Check if we're in a project directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: This script must be run from a project directory"
    echo "   Make sure you have package.json in the current directory"
    exit 1
fi

print_status "Installing project dependencies..."
npm install

print_status "Setting up MCP servers..."
if [ -f "setup-mcp.sh" ]; then
    ./setup-mcp.sh
else
    print_status "No setup-mcp.sh found, skipping MCP installation"
fi

print_status "Configuring API keys..."
if [ -f "setup-keys.sh" ]; then
    ./setup-keys.sh
else
    print_status "No setup-keys.sh found, skipping API key configuration"
fi

print_success "✅ Project setup complete!"
echo ""
echo "🚀 You can now start developing:"
echo "   npm run dev"
