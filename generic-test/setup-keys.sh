#!/bin/bash

# API Key Setup Script for Real Estate Licensing Project
# This script helps you gather and configure all your API keys

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

echo "🔑 API Key Setup for Real Estate Licensing Project"
echo "=================================================="
echo ""
echo "This script will help you gather all your API keys for the MCP servers."
echo "You can skip any keys you don't want to use by pressing Enter."
echo ""

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    cp env.example .env
    print_success "Created .env file from template"
fi

# Function to update .env file
update_env() {
    local key=$1
    local value=$2
    if [ ! -z "$value" ]; then
        # Use sed to update the .env file
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            sed -i.bak "s/^${key}=.*/${key}=${value}/" .env
            rm .env.bak
        else
            # Linux
            sed -i "s/^${key}=.*/${key}=${value}/" .env
        fi
        print_success "Updated $key"
    fi
}

echo "📋 Let's gather your API keys:"
echo ""

# GitHub Personal Access Token (Optional - for advanced MCP features)
echo "🐙 GitHub Personal Access Token (Optional)"
echo "   Note: Claude Code has native GitHub integration"
echo "   This MCP server is for advanced programmatic access"
echo "   Get it from: https://github.com/settings/tokens"
echo "   This enables advanced GitHub repository operations"
read -p "   Enter your GitHub token (or press Enter to skip): " GITHUB_TOKEN
update_env "GITHUB_TOKEN" "$GITHUB_TOKEN"
echo ""

# Supabase Configuration
echo "🚀 Supabase Configuration"
echo "   Get these from: https://supabase.com"
echo "   This enables database, storage, and edge functions (includes PostgreSQL)"
read -p "   Enter your Supabase URL: " SUPABASE_URL
read -p "   Enter your Supabase Anon Key: " SUPABASE_ANON_KEY
read -p "   Enter your Supabase Service Role Key: " SUPABASE_SERVICE_ROLE_KEY
update_env "SUPABASE_URL" "$SUPABASE_URL"
update_env "SUPABASE_ANON_KEY" "$SUPABASE_ANON_KEY"
update_env "SUPABASE_SERVICE_ROLE_KEY" "$SUPABASE_SERVICE_ROLE_KEY"
echo ""

# Context7 API Key
echo "🔍 Context7 API Key"
echo "   Get it from: https://console.upstash.com/context7"
echo "   This enables vector search and embeddings"
read -p "   Enter your Context7 API key (or press Enter to skip): " CONTEXT7_API_KEY
update_env "CONTEXT7_API_KEY" "$CONTEXT7_API_KEY"
echo ""

# Ref API Key
echo "🛠️  Ref API Key"
echo "   Get it from: https://ref.dev"
echo "   This enables development tools and deployment"
read -p "   Enter your Ref API key (or press Enter to skip): " REF_API_KEY
update_env "REF_API_KEY" "$REF_API_KEY"
echo ""

# BrowserMCP API Key
echo "🌐 BrowserMCP API Key"
echo "   Get it from: https://browsermcp.io"
echo "   This enables browser automation and web scraping"
read -p "   Enter your BrowserMCP API key (or press Enter to skip): " BROWSERMCP_API_KEY
update_env "BROWSERMCP_API_KEY" "$BROWSERMCP_API_KEY"
echo ""

# Vercel Configuration
echo "▲ Vercel Configuration"
echo "   Get these from: https://vercel.com/account/tokens"
echo "   This enables deployment automation"
read -p "   Enter your Vercel token (or press Enter to skip): " VERCEL_TOKEN
read -p "   Enter your Vercel Team ID (or press Enter to skip): " VERCEL_TEAM_ID
update_env "VERCEL_TOKEN" "$VERCEL_TOKEN"
update_env "VERCEL_TEAM_ID" "$VERCEL_TEAM_ID"
echo ""

# LottieFiles API Key
echo "🎨 LottieFiles API Key"
echo "   Get it from: https://lottiefiles.com"
echo "   This enables animation management"
read -p "   Enter your LottieFiles API key (or press Enter to skip): " LOTTIEFILES_API_KEY
update_env "LOTTIEFILES_API_KEY" "$LOTTIEFILES_API_KEY"
echo ""

# Application Configuration
echo "⚙️  Application Configuration"
echo "   These are for your application settings"
read -p "   Enter your JWT Secret (or press Enter for default): " JWT_SECRET
read -p "   Enter your MongoDB URI (or press Enter for default): " MONGODB_URI

if [ ! -z "$JWT_SECRET" ]; then
    update_env "JWT_SECRET" "$JWT_SECRET"
else
    update_env "JWT_SECRET" "your-super-secret-jwt-key-change-this-in-production"
fi

if [ ! -z "$MONGODB_URI" ]; then
    update_env "MONGODB_URI" "$MONGODB_URI"
else
    update_env "MONGODB_URI" "mongodb://localhost:27017/real-estate-licensing"
fi

echo ""
print_success "✅ All API keys have been configured!"
echo ""
echo "📋 Summary of configured services:"
echo ""

# Check which services are configured
if [ ! -z "$GITHUB_TOKEN" ]; then echo "✅ GitHub (Advanced MCP)"; else echo "❌ GitHub (Using Claude Code native)"; fi
if [ ! -z "$SUPABASE_URL" ]; then echo "✅ Supabase (includes PostgreSQL)"; else echo "❌ Supabase"; fi
if [ ! -z "$CONTEXT7_API_KEY" ]; then echo "✅ Context7"; else echo "❌ Context7"; fi
if [ ! -z "$REF_API_KEY" ]; then echo "✅ Ref"; else echo "❌ Ref"; fi
if [ ! -z "$BROWSERMCP_API_KEY" ]; then echo "✅ BrowserMCP"; else echo "❌ BrowserMCP"; fi
if [ ! -z "$VERCEL_TOKEN" ]; then echo "✅ Vercel"; else echo "❌ Vercel"; fi
if [ ! -z "$LOTTIEFILES_API_KEY" ]; then echo "✅ LottieFiles"; else echo "❌ LottieFiles"; fi

echo ""
echo "🎯 Ready to use (no API keys needed):"
echo "✅ Filesystem Server"
echo "✅ Playwright Server"
echo "✅ Sequential Thinking Server"
echo ""

echo "📝 Your .env file has been updated with your API keys."
echo "🔒 Remember to never commit your .env file to version control!"
echo ""
echo "🚀 Next steps:"
echo "1. Review your .env file to make sure everything looks correct"
echo "2. Run './setup-mcp.sh' to install the MCP servers"
echo "3. Start developing with 'npm run dev'"
