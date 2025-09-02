# 🤖 Automated Commit & Push Guide

This guide explains how to set up automatic commits and pushes for your website project.

## 🚀 **Option 1: Continuous File Monitoring (Recommended)**

### **What it does:**
- Monitors your project files continuously
- Automatically commits changes every 5 minutes
- Generates intelligent commit messages based on file types
- Pushes to GitHub automatically

### **How to use:**
```bash
# Start the auto-commit monitor
./scripts/auto-commit.sh

# The script will run continuously until you stop it (Ctrl+C)
# It will check for changes every 5 minutes and commit automatically
```

### **Configuration:**
Edit `scripts/auto-commit.sh` to customize:
- `COMMIT_INTERVAL`: How often to check for changes (default: 300 seconds)
- `WATCH_DIRS`: Which directories to monitor
- `EXCLUDE_PATTERNS`: Files to ignore

---

## 🔧 **Option 2: Git Hooks (Automatic on Git Commands)**

### **What it does:**
- Automatically pushes after every `git commit`
- Auto-stages common file types before commits
- Works whenever you use Git commands

### **How to set up:**
```bash
# Install the Git hooks
./scripts/setup-git-hooks.sh

# Now every time you commit, it will automatically push to GitHub
git commit -m "Your message"
# → Automatically pushes to GitHub! 🚀
```

### **What happens:**
- **Pre-commit**: Auto-stages common file types (`.tsx`, `.ts`, `.css`, etc.)
- **Post-commit**: Automatically pushes to GitHub

---

## 💻 **Option 3: VS Code Integration**

### **What it does:**
- Integrates with VS Code's Git features
- Auto-fetch, auto-stash, and smart commit
- Automatic push after commits

### **How to use:**
1. Open your project in VS Code
2. The `.vscode/settings.json` file is already configured
3. Use VS Code's Source Control panel for Git operations
4. Changes will automatically push to GitHub

---

## 📋 **Quick Start - Choose Your Method:**

### **For Continuous Development:**
```bash
# Start the file monitor (runs in background)
./scripts/auto-commit.sh &
```

### **For Manual Git Workflow:**
```bash
# Set up Git hooks
./scripts/setup-git-hooks.sh

# Now just use normal Git commands
git add .
git commit -m "Update website"
# → Automatically pushes! 🎉
```

### **For VS Code Users:**
- Just open your project in VS Code
- Use the Source Control panel
- Everything else is automatic

---

## ⚙️ **Customization Options:**

### **Change Commit Frequency:**
Edit `scripts/auto-commit.sh`:
```bash
COMMIT_INTERVAL=60  # Check every 1 minute
COMMIT_INTERVAL=600 # Check every 10 minutes
```

### **Custom Commit Messages:**
Edit `scripts/auto-commit.sh`:
```bash
# Modify the generate_commit_message() function
# Add your own logic for commit messages
```

### **Exclude Specific Files:**
Edit `scripts/auto-commit.sh`:
```bash
EXCLUDE_PATTERNS=("*.log" "*.tmp" "node_modules" ".next" ".git" "your-custom-pattern")
```

---

## 🎯 **Best Practices:**

### **When to Use Each Method:**
- **File Monitor**: During active development sessions
- **Git Hooks**: For consistent workflow across team members
- **VS Code**: For developers who prefer GUI Git operations

### **Commit Message Strategy:**
- File monitor generates descriptive messages automatically
- Git hooks work with your custom commit messages
- VS Code uses your input for commit messages

### **Backup Strategy:**
- All methods push to GitHub automatically
- Your work is never lost
- Easy to rollback if needed

---

## 🚨 **Important Notes:**

### **Security:**
- Scripts only run locally on your machine
- No external services have access to your code
- GitHub authentication uses your local Git credentials

### **Performance:**
- File monitor uses minimal system resources
- Git hooks add negligible overhead to Git operations
- VS Code integration is built-in and optimized

### **Troubleshooting:**
- If auto-push fails, check your GitHub authentication
- File monitor can be stopped with Ctrl+C
- Git hooks can be disabled by removing `.git/hooks/` files

---

## 🎉 **Ready to Automate?**

Choose your preferred method and start enjoying automatic commits and pushes! Your website changes will now be automatically backed up to GitHub, giving you peace of mind and a professional development workflow.

**Happy coding! 🚀**
