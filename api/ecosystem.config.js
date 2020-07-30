module.exports = {
  apps: [{
    name: 'server',
    script: './dist/index.js',
    env: {
      NODE_ENV: 'production'
    },
    max_memory_restart: '500M',
    out_file: './log/out.log',
    error_file: './log/err.log'
  }]
}
