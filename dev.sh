#!/bin/bash
# Script for local development and testing

# Function to display help
show_help() {
  echo "Usage: ./dev.sh [command]"
  echo "Commands:"
  echo "  run       - Run the application locally"
  echo "  deploy-vm - Deploy to VM for testing"
  echo "  help      - Show this help message"
}

# Run the application locally
run_local() {
  echo "Running the application locally..."
  npm install
  node index.js
}

# Deploy to VM for testing
deploy_vm() {
  echo "Deploying to VM for testing..."
  rsync -avz --exclude 'node_modules' --exclude '.git' ./ esakrissa@34.57.0.40:~/travel-agency-app/
  ssh esakrissa@34.57.0.40 "cd ~/travel-agency-app && npm install && pkill -f 'node index.js' || true && nohup node index.js > app.log 2>&1 &"
  echo "Deployment to VM completed!"
}

# Main script logic
case "$1" in
  run)
    run_local
    ;;
  deploy-vm)
    deploy_vm
    ;;
  help|*)
    show_help
    ;;
esac 