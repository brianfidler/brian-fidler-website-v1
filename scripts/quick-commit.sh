#!/bin/bash

# Quick Commit Script - Fast commit and push with minimal interaction

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Quick Commit & Push${NC}"

# Check if there are changes
if git diff-index --quiet HEAD --; then
    echo "✅ No changes to commit"
    exit 0
fi

# Show what's changed
echo "📝 Changes detected:"
git status --short

# Generate timestamp-based commit message
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
COMMIT_MSG="Update: $TIMESTAMP"

# Stage, commit, and push
echo -e "\n${BLUE}Staging changes...${NC}"
git add .

echo -e "${BLUE}Committing with message: $COMMIT_MSG${NC}"
git commit -m "$COMMIT_MSG"

# Check if remote exists and push
if git remote get-url origin > /dev/null 2>&1; then
    echo -e "${BLUE}Pushing to GitHub...${NC}"
    git push origin main
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
else
    echo "⚠️  No remote origin configured. Run setup-github.sh first."
fi
