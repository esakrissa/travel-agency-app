# Travel Agency Application

A simple travel agency application built with Node.js and Express, designed to be deployed on Google Cloud Run.

## Development Workflow

This project follows a GitHub-based workflow for development, testing, and deployment:

1. **Local Development**: Edit code locally using your preferred editor (e.g., Cursor)
2. **Testing on VM**: Deploy to the development VM for testing
3. **Production Deployment**: Deploy to Cloud Run for production

### Branches

- `main`: Production branch, automatically deploys to Cloud Run
- `dev`: Development branch, automatically deploys to the testing VM

## Local Development

To run the application locally:

```bash
./dev.sh run
```

## Deployment

### Deploy to VM for Testing

To manually deploy to the VM for testing:

```bash
./dev.sh deploy-vm
```

Alternatively, push your changes to the `dev` branch, and GitHub Actions will automatically deploy to the VM:

```bash
git checkout dev
git add .
git commit -m "Your commit message"
git push
```

### Deploy to Production

To deploy to production, merge your changes to the `main` branch, and GitHub Actions will automatically deploy to Cloud Run:

```bash
git checkout main
git merge dev
git push
```

## Application Structure

- `index.js`: Main application file
- `package.json`: Node.js dependencies
- `Dockerfile`: Container configuration for Cloud Run
- `.dockerignore`: Files to exclude from the container
- `.github/workflows/`: GitHub Actions workflow files

## Environment Variables

- `PORT`: The port on which the application will listen (default: 8080)

## License

This project is licensed under the MIT License.

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