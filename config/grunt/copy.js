module.exports = {
    usemin: {
        src: 'app/index.html', dest: 'dist/index.html'
    },
    root_assets: {
        files: [
            {expand: true, cwd: 'public/', src: ['*.*'], dest: 'dist'}
        ]
    },
    calculator: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['calculator/**'],
                dest: 'dist/assets/'
            }
        ]
    },
    images: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['images/**'],
                dest: 'dist/assets/'
            }
        ]
    },
    kayako: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['kayako/**'],
                dest: 'dist/assets/'
            }
        ]
    },
    appletouch: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['apple-touch/**'],
                dest: 'dist/assets/'
            }
        ]
    },
    svg: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['svg/**'],
                dest: 'dist/assets/'
            }
        ]
    },
    fonts: {
        files: [
            {
                expand: true,
                cwd: 'public/',
                src: ['fonts/**', 'fonts/.htaccess'],
                dest: 'dist/assets/'
            }
        ]
    },
    kissmetrics: {
        files: [
            {
                expand: true,
                cwd: 'public/vendor',
                src: ['kissmetrics/**'],
                dest: 'dist/assets/'
            }
        ]
    },
    partials: {
        files: [
            {
                expand: true,
                cwd: 'app/components/',
                src: ['**/**.html'],
                dest: 'dist/partials/',
                flatten: true
            },
            {
                expand: true,
                cwd: 'app/states/',
                src: ['**/**.html'],
                dest: 'dist/views/',
                flatten: true
            }
        ]
    }
};
