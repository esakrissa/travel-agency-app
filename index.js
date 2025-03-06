const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Add a simple health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  const deploymentTime = new Date().toLocaleString();
  res.send(`
    <html>
      <head>
        <title>Travel Agency - Updated Version</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            text-align: center;
          }
          header {
            margin-bottom: 40px;
          }
          h1 {
            color: #0066cc;
            font-size: 2.5em;
            margin-bottom: 10px;
          }
          .tagline {
            font-size: 1.2em;
            color: #666;
            margin-bottom: 30px;
          }
          .card {
            background-color: #fff;
            border-radius: 8px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .info {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 30px 0;
          }
          .info-item {
            background-color: #e9f7fe;
            border-left: 4px solid #0066cc;
            padding: 15px;
            margin: 10px;
            flex: 1;
            min-width: 200px;
            border-radius: 4px;
            text-align: left;
          }
          .footer {
            margin-top: 40px;
            font-size: 0.9em;
            color: #777;
            border-top: 1px solid #eee;
            padding-top: 20px;
          }
          .highlight {
            background-color: #ffffcc;
            padding: 3px 6px;
            border-radius: 3px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>Welcome to Travel Agency</h1>
            <p class="tagline">Your journey begins with us</p>
          </header>
          
          <div class="card">
            <h2>Automatic Deployment Demo</h2>
            <p>This page demonstrates automatic deployment via GitHub Actions to a GCP VM instance.</p>
            <p class="highlight">This is the updated version of the application!</p>
          </div>
          
          <div class="info">
            <div class="info-item">
              <h3>Server Info</h3>
              <p>Server time: ${new Date().toLocaleString()}</p>
              <p>Environment: Development</p>
              <p>Deployment: ${deploymentTime}</p>
            </div>
            <div class="info-item">
              <h3>Tech Stack</h3>
              <p>Node.js + Express</p>
              <p>PM2 Process Manager</p>
              <p>GitHub Actions CI/CD</p>
            </div>
          </div>
          
          <div class="footer">
            <p>© 2025 Travel Agency - Deployed via GitHub Actions to GCP VM</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Travel Agency app listening on port ${port}`);
  console.log(`Server running at http://0.0.0.0:${port}/`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  
  // Send ready signal to PM2
  if (process.send) {
    process.send('ready');
  }
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Received SIGINT. Performing graceful shutdown...');
  server.close(() => {
    console.log('Server closed. Exiting process...');
    process.exit(0);
  });
}); 