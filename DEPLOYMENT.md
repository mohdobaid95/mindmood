# AWS Amplify Deployment Guide

## Quick Deployment Steps

### Option 1: AWS Amplify Console (Recommended)

1. **Go to AWS Amplify Console**
   - Visit: https://console.aws.amazon.com/amplify/
   - Sign in to your AWS account

2. **Create New App**
   - Click "New app" → "Host web app"
   - Select "GitHub" as your source

3. **Authorize GitHub** (if first time)
   - Click "Authorize GitHub"
   - Grant AWS Amplify access to your repositories
   - Select account: `mohdobaid95`

4. **Select Repository**
   - Repository: `mohdobaid95/mindmood`
   - Branch: `main`
   - Click "Next"

5. **Configure Build Settings**
   - Build settings are auto-detected from `amplify.yml`
   - Verify:
     - Build command: `npm install && npm run build`
     - Output directory: `dist` (Vite outputs to dist, not build)
   - Click "Next"

6. **Review and Deploy**
   - Review settings
   - Click "Save and deploy"
   - Wait for deployment (5-10 minutes)

7. **Get Live URL**
   - Once deployed, you'll see: `https://main.[app-id].amplifyapp.com`
   - This is your live public URL

### Build Configuration (Already Set)

The `amplify.yml` file is already configured:
- **Pre-build**: `npm install`
- **Build**: `npm run build`
- **Output**: `dist` directory
- **Cache**: `node_modules`

### AWS Free Tier

AWS Amplify Hosting is included in the Free Tier:
- 15 GB storage per month
- 5 GB served per month
- 1,000 build minutes per month
- Perfect for this React app!

### Continuous Deployment

Once connected, every push to the `main` branch will automatically:
1. Trigger a new build
2. Deploy to production
3. Update the live URL

## Troubleshooting

If build fails:
- Check that `dist` directory is correct (Vite uses `dist`, not `build`)
- Verify Node.js version (Amplify uses Node 18 by default)
- Check build logs in Amplify Console

