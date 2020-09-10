module.exports = {
  apps: [{
    name: 'app',
    // Cannot run on windows
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production'
    },
    max_memory_restart: '400M'
  }]
}
