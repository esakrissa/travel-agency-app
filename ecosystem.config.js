module.exports = {
  apps: [{
    name: "travel-agency-app",
    script: "index.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "200M",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    },
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    out_file: "app.log",
    error_file: "app-error.log",
  }]
}; 