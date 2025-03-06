const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Travel Agency</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
          }
          h1 {
            color: #2c3e50;
          }
          .info {
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
            margin-top: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          .footer {
            margin-top: 20px;
            font-size: 0.8em;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to Travel Agency</h1>
          <div class="info">
            <p>This is a simple Cloud Run application running in development.</p>
            <p>Server time: ${new Date().toLocaleString()}</p>
            <p>Environment: Development</p>
          </div>
          <div class="footer">
            <p>© 2025 Travel Agency - Deployed via GitHub Actions</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Travel Agency app listening on port ${port}`);
}); 