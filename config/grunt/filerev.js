module.exports = function (grunt, options) {
    return {
        options: {
            algorithm: 'md5',
            length: 12
        },
        dev: {
        },
        prodPre: {
            files: [{
                src: [
                    'dist/assets/images/**/*.{jpg,jpeg,gif,png,webp}'
                ]
            }]
        },
        prodPost: {
            files: [{
                src: [
                    'dist/assets/js/*.js',
                    'dist/assets/css/*.css'
                ]
            }]
        }
    }
};


