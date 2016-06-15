module.exports = function (grunt, options) {
    return {
        options: {
            inline: true,
            context: {
                DEBUG: !(options.production),
                PROD: !!(options.production)
            }
        },
        html: {
            src: [
                'dist/index.html',
                'dist/partials/*.html',
                'dist/views/*.html'
            ]
        }
    }
};