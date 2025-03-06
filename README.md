# Travel Agency Application

A modern travel planning platform built with Node.js and Docker.

## Environments

### Production
- **URL**: https://travel-agency-service-957176400089.us-central1.run.app
- **Platform**: Google Cloud Run
- **Status**: Live 🚀
- **Region**: us-central1

### Development
- **Platform**: Docker on VM
- **Environment**: Development
- **Access**: Internal development environment (VPN required)
- **Region**: us-central1
- **Note**: Development server access is restricted to authorized team members only

## Features
- Modern, centered UI design
- Real-time server status
- Docker containerization
- Health check endpoints
- Environment-specific configurations

## Tech Stack
- Node.js
- Express
- Docker
- GitHub Actions
- Google Cloud Platform
  - Cloud Run
  - Artifact Registry
  - Compute Engine (Development)
  - VPC Network

## Security Measures
- Production environment:
  - HTTPS enforced
  - Cloud Run's built-in security features
  - Automated deployments via GitHub Actions
- Development environment:
  - Access restricted to authorized IPs
  - VPN required for development access
  - Docker containerization for isolation
  - Regular security updates
- General security:
  - No public IP addresses in codebase
  - Secrets managed through GitHub Secrets
  - IAM role-based access control
  - Regular security audits

## Deployment

### Production Deployment
Production deployments are automated via GitHub Actions when changes are merged to the `main` branch.

```bash
# Merge changes to main to trigger deployment
git checkout main
git merge dev
git push origin main
```

### Development Deployment
Development deployments are automated via GitHub Actions when changes are pushed to the `dev` branch.

```bash
# Push changes to dev for testing
git checkout dev
git push origin dev
```

## Local Development

1. Clone the repository
```bash
git clone <repository-url>
cd travel-agency-app
```

2. Install dependencies
```bash
npm install
```

3. Run locally
```bash
npm start
```

## Health Check
Both environments provide a health check endpoint at `/health`

## Contributing
1. Create a feature branch from `dev`
2. Make your changes
3. Push to `dev` for testing
4. Create a pull request to `main` for production deployment

## Access Control
- Production: Publicly accessible via Cloud Run URL
- Development: 
  - Requires VPN connection
  - IP whitelist enforced
  - Contact DevOps team for access

## Monitoring
- Production: Google Cloud Console
- Development: Docker logs and health endpoints
- Both: Stackdriver logging enabled

## License
© 2025 Travel Agency - All rights reserved 