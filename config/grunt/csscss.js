module.exports = function (grunt, options) {
    return {
        options: {
            minMatch: 5,
            verbose: true
        },
        dist: {
            src: ['dist/assets/css/app.css']
        }
    }
};