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
