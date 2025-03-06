module.exports = {
  apps: [{
    name: "travel-agency-app",
    script: "index.js",
    instances: 1,
    exec_mode: "fork",
    autorestart: true,
    watch: false,
    max_memory_restart: "300M",
    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 5000,
    restart_delay: 3000,
    max_restarts: 5,
    min_uptime: "30s",
    exp_backoff_restart_delay: 1000,
    force: true,
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
    merge_logs: true,
    time: true,
    ignore_watch: ["node_modules", "*.log"],
    stop_exit_codes: [0],
    node_args: "--max-old-space-size=300"
  }]
}; 