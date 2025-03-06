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
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          }
          .container {
            max-width: 800px;
            margin: 20px;
            padding: 40px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            text-align: center;
          }
          h1 {
            color: #2c3e50;
            margin-bottom: 30px;
            font-size: 2.5em;
            font-weight: 600;
          }
          .info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 30px 0;
            text-align: left;
            border-left: 5px solid #2c3e50;
          }
          .info p {
            margin: 10px 0;
            color: #444;
          }
          .footer {
            margin-top: 40px;
            color: #666;
            font-size: 0.9em;
            border-top: 1px solid #eee;
            padding-top: 20px;
          }
          .status-badge {
            display: inline-block;
            padding: 8px 15px;
            background: #e8f5e9;
            color: #2e7d32;
            border-radius: 20px;
            font-weight: 500;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>✈️ Travel Agency</h1>
          <p>Welcome to our modern travel planning platform</p>
          
          <div class="info">
            <p>🕒 Server Time: ${deploymentTime}</p>
            <p>🔧 Environment: ${process.env.NODE_ENV || 'development'}</p>
          </div>
          
          <div class="status-badge">
            Running in Docker Container
          </div>
          
          <div class="footer">
            <p>© 2025 Travel Agency - Powered by Docker</p>
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