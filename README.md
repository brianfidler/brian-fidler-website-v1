# MCP Project Template

This template includes a complete setup for a modern web application with MCP server integration.

## What's Included

### Core Application
- Node.js/Express backend
- React frontend (ready to add)
- Modern project structure
- Development scripts

### MCP Servers
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

### Configuration
- Environment variables template
- MCP server configuration
- Setup scripts

## Quick Start

1. **Create a new project:**
   ```bash
   ./create-project.sh my-new-project
   ```

2. **Navigate to your project:**
   ```bash
   cd my-new-project
   ```

3. **Quick setup (optional):**
   ```bash
   ./quick-setup.sh
   ```

4. **Or manual setup:**
   ```bash
   ./setup-keys.sh  # Configure API keys
   npm install      # Install dependencies
   npm run dev      # Start development
   ```

## Files Included

- `package.json` - Project configuration and scripts
- `mcp-config.json` - MCP server configuration
- `setup-keys.sh` - API key configuration script
- `create-project.sh` - New project creation script
- `quick-setup.sh` - One-command setup script
- `server/` - Backend code
- `.env.template` - Environment variables template

## Customization

After creating a new project, you can:
- Modify `package.json` for your specific needs
- Update `mcp-config.json` to add/remove MCP servers
- Customize the server code in `server/`
- Add your React frontend to `client/`

## Notes

- The `.env.template` file contains your configured API keys
- Never commit `.env` files to version control
- Update the project name in `package.json` after creation
