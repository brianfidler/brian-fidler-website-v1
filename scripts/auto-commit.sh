#!/bin/bash

# Auto-Commit Script - Monitors file changes and commits automatically
# This script watches for changes and commits them with smart commit messages

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Configuration
WATCH_DIRS=("src" "components" "styles" "public")
EXCLUDE_PATTERNS=("*.log" "*.tmp" "node_modules" ".next" ".git")
COMMIT_INTERVAL=300  # 5 minutes
LAST_COMMIT_FILE=".last_auto_commit"

echo -e "${BLUE}🤖 Auto-Commit Monitor Started${NC}"
echo "Watching directories: ${WATCH_DIRS[*]}"
echo "Commit interval: ${COMMIT_INTERVAL} seconds"
echo "Press Ctrl+C to stop"
echo

# Function to check if there are changes
check_changes() {
    if git diff-index --quiet HEAD --; then
        return 1  # No changes
    else
        return 0  # Has changes
    fi
}

# Function to generate smart commit message
generate_commit_message() {
    # Get list of changed files
    CHANGED_FILES=$(git diff --name-only HEAD)
    
    # Count changes by type
    COMPONENT_CHANGES=$(echo "$CHANGED_FILES" | grep -c "components/" || echo "0")
    PAGE_CHANGES=$(echo "$CHANGED_FILES" | grep -c "app/" || echo "0")
    STYLE_CHANGES=$(echo "$CHANGED_FILES" | grep -c "styles/" || echo "0")
    CONTENT_CHANGES=$(echo "$CHANGED_FILES" | grep -c "content/" || echo "0")
    
    # Generate message based on what changed
    if [ "$COMPONENT_CHANGES" -gt 0 ]; then
        echo "Update: Component changes and improvements"
    elif [ "$PAGE_CHANGES" -gt 0 ]; then
        echo "Update: Page content and structure updates"
    elif [ "$STYLE_CHANGES" -gt 0 ]; then
        echo "Update: Styling and design improvements"
    elif [ "$CONTENT_CHANGES" -gt 0 ]; then
        echo "Update: Content and copy updates"
    else
        echo "Update: General improvements and fixes"
    fi
}

# Function to perform auto-commit
auto_commit() {
    if check_changes; then
        echo -e "${YELLOW}📝 Changes detected, preparing auto-commit...${NC}"
        
        # Stage all changes
        git add .
        
        # Generate commit message
        COMMIT_MSG=$(generate_commit_message)
        
        # Commit with timestamp
        TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
        FULL_MSG="$COMMIT_MSG - $TIMESTAMP"
        
        echo -e "${BLUE}Committing: $FULL_MSG${NC}"
        git commit -m "$FULL_MSG"
        
        # Push to GitHub
        echo -e "${BLUE}Pushing to GitHub...${NC}"
        git push origin main
        
        echo -e "${GREEN}✅ Auto-commit completed successfully!${NC}"
        
        # Update last commit timestamp
        date +%s > "$LAST_COMMIT_FILE"
    else
        echo -e "${BLUE}✅ No changes detected${NC}"
    fi
}

# Main monitoring loop
while true; do
    echo -e "${BLUE}🔍 Checking for changes...${NC}"
    auto_commit
    
    echo -e "${YELLOW}⏰ Waiting ${COMMIT_INTERVAL} seconds before next check...${NC}"
    sleep $COMMIT_INTERVAL
    echo
done
