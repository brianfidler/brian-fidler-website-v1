#!/bin/bash

# Create New Project from Template
# Usage: ./create-project.sh <project-name>

set -e

if [ $# -eq 0 ]; then
    echo "Usage: $0 <project-name>"
    echo "Example: $0 my-new-project"
    exit 1
fi

PROJECT_NAME=$1
PROJECT_DIR="$PROJECT_NAME"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

echo "🚀 Creating new project: $PROJECT_NAME"
echo "====================================="

# Check if directory already exists
if [ -d "$PROJECT_DIR" ]; then
    print_error "Directory $PROJECT_DIR already exists!"
    exit 1
fi

# Create project directory
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

# Copy template files
cp ../package.json .
cp ../mcp-config.json .
cp ../setup-keys.sh .
cp -r ../server .

# Create .env from template
cp ../.env.template .env

# Create .gitignore
cat > .gitignore << 'GITIGNORE'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build outputs
build/
dist/
*.tgz
*.tar.gz

# Logs
logs/
*.log

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# Data directory
data/

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
GITIGNORE

# Create README
cat > README.md << 'README'
# $PROJECT_NAME

A modern web application with MCP server integration.

## Quick Start

1. **Install MCP Servers:**
   ```bash
   ./setup-mcp.sh
   ```

2. **Configure API Keys:**
   ```bash
   ./setup-keys.sh
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server (backend + frontend)
- `npm run server` - Start backend server only
- `npm run client` - Start frontend only
- `npm run build` - Build for production
- `npm start` - Start production server

## MCP Servers Included

- Filesystem Server
- Supabase (includes PostgreSQL)
- Context7
- Ref
- BrowserMCP
- Vercel
- Playwright
- Sequential Thinking
- LottieFiles
- GitHub (optional)

## Environment Variables

Copy `.env.example` to `.env` and configure your API keys:

```bash
cp .env.example .env
```

Then run `./setup-keys.sh` to configure all your API keys.
README

# Create data directory
mkdir -p data

print_success "Project $PROJECT_NAME created successfully!"
echo ""
echo "📋 Next steps:"
echo "1. cd $PROJECT_NAME"
echo "2. ./setup-keys.sh (to configure your API keys)"
echo "3. npm install"
echo "4. npm run dev"
echo ""
echo "🎯 Your new project is ready to go!"
