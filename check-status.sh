#!/bin/bash
# Script to check the status of the travel agency application on the VM

echo "Checking application status on VM..."

# Check PM2 status
echo "PM2 status:"
ssh esakrissa@34.57.0.40 "pm2 status || echo 'PM2 not installed or not running'"

# Check if the process is running
echo -e "\nProcess status:"
ssh esakrissa@34.57.0.40 "ps aux | grep 'node index.js' | grep -v grep || echo 'Process not found'"

# Check if the port is listening
echo -e "\nPort status:"
ssh esakrissa@34.57.0.40 "sudo netstat -tulpn | grep :8080 || echo 'Port 8080 not in use'"

# Check firewall status
echo -e "\nFirewall status:"
ssh esakrissa@34.57.0.40 "sudo ufw status | grep 8080 || echo 'No firewall rule for port 8080'"

# Try to curl the health endpoint locally on the VM
echo -e "\nLocal health check:"
ssh esakrissa@34.57.0.40 "curl -s http://localhost:8080/health || echo 'Health check failed'"

# Check application logs
echo -e "\nApplication logs (last 10 lines):"
ssh esakrissa@34.57.0.40 "cat ~/travel-agency-app/app.log | tail -n 10 || echo 'No log file found'"

echo -e "\nStatus check completed." 