module.exports = function() {
    return {
        options: {
            sourceMap: false
        },
        snapshot: {
            src: ['public/vendor/bower/angular/angular.js',
                'public/vendor/bower/angular-animate/angular-animate.js',
                'public/vendor/bower/angular-sanitize/angular-sanitize.js',
                'public/vendor/bower/angular-cookies/angular-cookies.js',
                'public/vendor/bower/angular-inview/angular-inview.js',
                'public/vendor/bower/angular-ui-router/release/angular-ui-router.js',
                'public/vendor/bower/angulartics/src/angulartics.js',
                'public/vendor/bower/angulartics/src/angulartics-gtm.js',
                'public/vendor/odometer.min.js',
                'public/vendor/bower/angulartics/src/angulartics-kissmetrics.js',
                'app/app.module.js',
                'app/**/*.module.js',
                'app/!(*spec|*mock|*route).js',
                'app/**/*.factory.js',
                'app/**/!(*spec|*mock|*route).js'
            ],
            dest: 'dist/assets/js/app.js'
        }
    };
};