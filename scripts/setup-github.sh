#!/bin/bash

# GitHub Setup Script for Brian Fidler Website

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🔧 GitHub Repository Setup${NC}"
echo "This script will help you connect your local repository to GitHub."
echo

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository. Please run this script from your project root."
    exit 1
fi

# Check if remote already exists
if git remote get-url origin > /dev/null 2>&1; then
    CURRENT_REMOTE=$(git remote get-url origin)
    echo -e "${YELLOW}⚠️  Remote origin already configured:${NC}"
    echo "   $CURRENT_REMOTE"
    echo
    read -p "Do you want to change it? (y/N): " CHANGE_REMOTE
    if [[ $CHANGE_REMOTE =~ ^[Yy]$ ]]; then
        git remote remove origin
    else
        echo "Keeping existing remote origin."
        exit 0
    fi
fi

echo "📋 To set up GitHub integration, you need to:"
echo "   1. Create a new repository on GitHub (if you haven't already)"
echo "   2. Copy the repository URL"
echo

# Get repository URL from user
read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo-name): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ No repository URL provided. Exiting."
    exit 1
fi

# Add remote origin
echo -e "\n${BLUE}Adding remote origin...${NC}"
git remote add origin "$REPO_URL"

# Verify remote was added
if git remote get-url origin > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Remote origin added successfully!${NC}"
    echo "   Remote URL: $(git remote get-url origin)"
else
    echo "❌ Failed to add remote origin."
    exit 1
fi

# Push to GitHub
echo -e "\n${BLUE}Pushing to GitHub...${NC}"
if git push -u origin main; then
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
    echo -e "${GREEN}🎉 Your repository is now connected to GitHub!${NC}"
else
    echo "❌ Failed to push to GitHub. This might be because:"
    echo "   - The repository doesn't exist on GitHub"
    echo "   - You don't have access to the repository"
    echo "   - Authentication issues"
    echo
    echo "Please check your GitHub repository and try again."
fi

echo
echo -e "${BLUE}📚 Next steps:${NC}"
echo "   - Use './scripts/quick-commit.sh' for fast commits and pushes"
echo "   - Use './scripts/git-workflow.sh' for detailed commit workflow"
echo "   - Your changes will now be automatically synced to GitHub!"
