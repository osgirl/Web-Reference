module.exports = function(grunt, options) {

    var flowSteps = (options.production) ? 'uglifyjs' : 'concat';

    return {

        html: ['app/index.html'],
        options: {
            dest: 'dist',
            flow: {
                steps: {
                    js: [flowSteps]
                },
                post: {}
            }
        }


    }
};

