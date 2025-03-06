module.exports = {
  apps: [{
    name: "travel-agency-app",
    script: "index.js",
    instances: 1,
    exec_mode: "fork",
    autorestart: true,
    watch: false,
    max_memory_restart: "200M",
    kill_timeout: 3000,
    wait_ready: true,
    listen_timeout: 3000,
    env: {
      NODE_ENV: "development",
      PORT: 8080
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 8080
    },
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    out_file: "app.log",
    error_file: "app-error.log",
    merge_logs: true
  }]
}; 