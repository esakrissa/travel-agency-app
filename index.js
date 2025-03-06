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
        <title>Travel Agency</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
          }
          h1 {
            color: #2c3e50;
          }
          .info {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 4px;
            margin-top: 20px;
          }
          .footer {
            margin-top: 30px;
            color: #666;
            font-size: 0.9em;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Travel Agency</h1>
          <p>Welcome to our travel agency application.</p>
          
          <div class="info">
            <p>Server Time: ${deploymentTime}</p>
            <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
          </div>
          
          <div class="footer">
            <p>© 2025 Travel Agency</p>
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