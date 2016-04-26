var path = require("path");

module.exports = {
    // options for all targets
    options: {
        input: "sitemap",
        source: "sitemap.xml",
        snapshotScript: {
            script: "customFilter",
            module: path.join(__dirname, "../snapshot_filter.js")
        },
        timeout: 15000,
        processLimit: 8
    },
    // the debug target
    debug: {
        options: {
            outputDir: "./snapshot/debug"
        }
    },
    // the release target
    release: {
        options: {
            outputDir: "./dist"
        }
    }

};
