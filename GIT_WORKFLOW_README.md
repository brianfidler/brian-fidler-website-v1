# Git Workflow for Brian Fidler Website

This project includes automated Git workflows to ensure your changes are consistently committed and pushed to GitHub.

## 🚀 Quick Start

### 1. Initial Setup
```bash
# Run the GitHub setup script (first time only)
./scripts/setup-github.sh
```

### 2. Daily Usage
```bash
# Quick commit and push (recommended for most changes)
./scripts/quick-commit.sh

# Detailed commit workflow (when you want custom commit messages)
./scripts/git-workflow.sh
```

## 📁 Scripts Overview

### `scripts/quick-commit.sh` ⚡
- **Purpose**: Fast, automated commits and pushes
- **Best for**: Daily updates, small changes, quick saves
- **Features**:
  - Automatically stages all changes
  - Generates timestamp-based commit messages
  - Pushes to GitHub automatically
  - Minimal user interaction required

### `scripts/git-workflow.sh` 🔧
- **Purpose**: Detailed commit workflow with custom messages
- **Best for**: Major changes, releases, when you want descriptive commits
- **Features**:
  - Shows what files have changed
  - Prompts for custom commit messages
  - Auto-generates messages if none provided
  - Full control over commit process

### `scripts/setup-github.sh` 🆕
- **Purpose**: One-time setup to connect to GitHub
- **When to use**: First time setup or changing GitHub repository
- **Features**:
  - Guides you through GitHub repository setup
  - Configures remote origin
  - Tests connection and first push

## 🔄 Workflow Examples

### Daily Development Workflow
```bash
# 1. Make your changes to the website
# 2. Test your changes
# 3. Quick commit and push
./scripts/quick-commit.sh
```

### Major Feature Release
```bash
# 1. Complete your feature
# 2. Test thoroughly
# 3. Use detailed workflow for descriptive commit
./scripts/git-workflow.sh
# Enter: "feat: Add new contact form with validation"
```

### After Each Significant Change
```bash
# After adding new pages, updating content, or making design changes
./scripts/quick-commit.sh
```

## 📋 Prerequisites

1. **Git installed** on your system
2. **GitHub account** and repository created
3. **SSH keys** or **Personal Access Token** configured for GitHub

## 🛠️ Manual Git Commands (if needed)

If you prefer to use Git commands directly:

```bash
# Check status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

## 🔧 Troubleshooting

### "No remote origin configured"
```bash
./scripts/setup-github.sh
```

### "Authentication failed"
- Check your SSH keys or Personal Access Token
- Ensure you have access to the GitHub repository

### "Repository not found"
- Verify the GitHub repository URL
- Ensure the repository exists and is public/accessible

### "Permission denied"
- Check your GitHub account permissions
- Verify SSH key configuration

## 📚 Best Practices

1. **Commit frequently**: Use `quick-commit.sh` after each significant change
2. **Descriptive messages**: Use `git-workflow.sh` for important changes
3. **Test before commit**: Always test your changes before committing
4. **Pull before push**: Run `git pull origin main` if working with others
5. **Branch for features**: Create feature branches for major changes

## 🎯 When to Use Each Script

| Scenario | Script | Why |
|----------|--------|-----|
| Daily updates | `quick-commit.sh` | Fast, automated, timestamp-based |
| Content changes | `quick-commit.sh` | Quick saves, no custom messages needed |
| New features | `git-workflow.sh` | Descriptive commits for important changes |
| Bug fixes | `quick-commit.sh` | Fast iteration and testing |
| Releases | `git-workflow.sh` | Professional, descriptive commit messages |
| First time setup | `setup-github.sh` | One-time configuration |

## 🚨 Important Notes

- **Always test** your changes before committing
- **Never commit** sensitive information (API keys, passwords)
- **Use meaningful** commit messages for important changes
- **Keep commits atomic** - one logical change per commit
- **Pull regularly** if working with a team

## 📞 Support

If you encounter issues with the Git workflow:

1. Check this README for troubleshooting steps
2. Verify your GitHub repository configuration
3. Ensure you have proper Git and GitHub access
4. Check the script output for specific error messages

---

**Happy coding! 🎉** Your website changes will now be automatically backed up to GitHub with every commit.
