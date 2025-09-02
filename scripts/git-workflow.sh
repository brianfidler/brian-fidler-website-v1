#!/bin/bash

# Git Workflow Script for Brian Fidler Website
# This script automates the process of committing and pushing changes

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
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

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not in a git repository. Please run this script from your project root."
    exit 1
fi

# Check if there are any changes to commit
if git diff-index --quiet HEAD --; then
    print_warning "No changes to commit. Working directory is clean."
    exit 0
fi

# Get the current branch
CURRENT_BRANCH=$(git branch --show-current)
print_status "Current branch: $CURRENT_BRANCH"

# Show what files have changed
print_status "Changed files:"
git status --short

# Ask for commit message
echo
read -p "Enter commit message (or press Enter for auto-generated): " COMMIT_MESSAGE

# If no commit message provided, generate one based on changed files
if [ -z "$COMMIT_MESSAGE" ]; then
    # Get list of changed files and generate a descriptive message
    CHANGED_FILES=$(git status --short | head -5 | awk '{print $2}' | tr '\n' ' ')
    COMMIT_MESSAGE="Update: $(echo $CHANGED_FILES | sed 's/ $//')"
    print_status "Auto-generated commit message: $COMMIT_MESSAGE"
fi

# Stage all changes
print_status "Staging all changes..."
git add .

# Commit changes
print_status "Committing changes..."
if git commit -m "$COMMIT_MESSAGE"; then
    print_success "Changes committed successfully!"
else
    print_error "Failed to commit changes."
    exit 1
fi

# Check if remote origin exists
if git remote get-url origin > /dev/null 2>&1; then
    print_status "Pushing to remote repository..."
    if git push origin $CURRENT_BRANCH; then
        print_success "Changes pushed successfully to GitHub!"
    else
        print_error "Failed to push changes. You may need to set up the remote origin first."
        print_status "To set up remote origin, run:"
        echo "  git remote add origin <your-github-repo-url>"
        echo "  git push -u origin $CURRENT_BRANCH"
    fi
else
    print_warning "No remote origin configured. To set up GitHub integration:"
    echo "  1. Create a new repository on GitHub"
    echo "  2. Run: git remote add origin <your-github-repo-url>"
    echo "  3. Run: git push -u origin $CURRENT_BRANCH"
fi

print_success "Git workflow completed!"
