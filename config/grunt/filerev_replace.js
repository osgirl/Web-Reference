module.exports = function (grunt, options) {
    return {
        css: {
            options: {
                assets_root: 'dist/'
            },
            src: 'dist/assets/css/*.css'
        },
        html: {
            options: {
                assets_root: 'dist/'
            },
            src: 'dist/*.html'
        },
        about: {
            options: {
                assets_root: 'dist/about-us/'
            },
            src: 'dist/about-us/*.html'
        },
        terms: {
            options: {
                assets_root: 'dist/terms/'
            },
            src: 'dist/terms/*.html'
        },
        jobs: {
            options: {
                assets_root: 'dist/jobs/'
            },
            src: 'dist/jobs/*.html'
        },
        blog: {
            options: {
                assets_root: 'dist/blog/'
            },
            src: 'dist/blog/*.html'
        },
        calculator: {
            options: {
                assets_root: 'dist/savings-calculator/'
            },
            src: 'dist/savings-calculator//*.html'
        },
        getintouch: {
            options: {
                assets_root: 'dist/get-in-touch/'
            },
            src: 'dist/get-in-touch/*.html'
        },
        privacy: {
            options: {
                assets_root: 'dist/privacy-policy/'
            },
            src: 'dist/privacy-policy/*.html'
        }
    }
};


