module.exports = {
    options: {
        // Override defaults here
    },
    dev: {
        options: {
            script: 'app.js',
            port: 3000,
            hostname: "localhost",
            livereload: true,
            node_env: 'development',
            serverreload: true
        }
    },
    snapshot: {
        options: {
            script: 'app.js',
            port: 3000,
            hostname: "localhost",
            node_env: 'production'
        }
    }
};