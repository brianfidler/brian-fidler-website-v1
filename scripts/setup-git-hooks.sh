#!/bin/bash

# Git Hooks Setup Script
# This script sets up automatic commits and pushes using Git hooks

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🔧 Setting up Git Hooks for Auto-Commit${NC}"

# Create .git/hooks directory if it doesn't exist
mkdir -p .git/hooks

# Post-commit hook - automatically push after each commit
cat > .git/hooks/post-commit << 'EOF'
#!/bin/bash

# Post-commit hook - automatically push to GitHub
echo "🚀 Auto-pushing to GitHub..."

# Push to origin main
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "❌ Failed to push to GitHub. You may need to push manually."
fi
EOF

# Pre-commit hook - check for specific file types and auto-add
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash

# Pre-commit hook - auto-add common file types
echo "🔍 Pre-commit: Checking for unstaged changes..."

# Auto-add common file types that should always be committed
git add "*.tsx" "*.ts" "*.js" "*.jsx" "*.css" "*.scss" "*.json" "*.md" "*.txt" "*.yml" "*.yaml" 2>/dev/null || true

# Check if there are any unstaged changes
if ! git diff --cached --quiet; then
    echo "✅ Pre-commit: Files staged successfully"
else
    echo "ℹ️  Pre-commit: No files to stage"
fi
EOF

# Make hooks executable
chmod +x .git/hooks/post-commit
chmod +x .git/hooks/pre-commit

echo -e "${GREEN}✅ Git hooks installed successfully!${NC}"
echo
echo -e "${BLUE}📋 What happens now:${NC}"
echo "• After every commit, changes will automatically push to GitHub"
echo "• Before every commit, common file types will be auto-staged"
echo "• You can still use manual commits: git commit -m 'message'"
echo
echo -e "${YELLOW}⚠️  Note: These hooks only work when you run git commands${NC}"
echo "   For continuous monitoring, use: ./scripts/auto-commit.sh"
