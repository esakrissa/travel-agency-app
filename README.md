# Travel Agency Cloud Run Application

This is a simple Node.js application deployed on Google Cloud Run.

## Development Environment

The development environment is set up on an e2-micro VM instance in GCP:
- Instance name: dev-instance
- Zone: us-central1-a
- External IP: 35.209.157.164

## Production Environment

The production environment is deployed on Google Cloud Run:
- Region: us-central1
- Service name: travel-agency-service
- URL: https://travel-agency-service-957176400089.us-central1.run.app

## Deployment Instructions

### Local Development

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Access the application at http://localhost:8080

### Deploy to Cloud Run

```bash
# Deploy directly from source code
gcloud run deploy travel-agency-service --source . --platform managed --region us-central1 --allow-unauthenticated
```

## Free Tier Usage

This project is designed to stay within GCP's always-free tier:
- 1 e2-micro VM instance (development)
- Cloud Run with 2 million requests per month (production) 