module.exports = function (grunt, options) {
    return {
        options: {
            sourceComments:!(options.production),
            includePaths: ['app/components', 'public/vendor/bower'],
            outputStyle: (options.production ? 'compressed' : 'expanded')
        },
        main: {
            files: {
                'dist/assets/css/app.css': 'public/scss/app.scss',
                'dist/assets/kayako/kayako.css': 'public/scss/app.scss',
                'dist/assets/css/print.css': 'public/scss/print.scss'
            }
        }
    }
};