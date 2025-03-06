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
    restart_delay: 1000,
    max_restarts: 10,
    min_uptime: "30s",
    exp_backoff_restart_delay: 100,
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
    ignore_watch: ["node_modules", "app.log", "app-error.log"],
    stop_exit_codes: [0],
    exp_backoff_restart_delay: 100
  }]
}; 