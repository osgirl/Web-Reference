module.exports = {
    options: {
        livereload: true
    },
    js_files: {
        files: ['app/**/*.js', 'public/vendor/**/*.js'],
        tasks: ['x_compile', 'notify:watch_js']
    },
    svg_files: {
        files: ['public/svg/*.*'],
        tasks: ['copy:svg', 'notify:watch_svg']
    },
    root_files: {
        files: ['public/*.*'],
        tasks: ['copy:root_assets', 'notify:watch_images']
    },
    orphans_files: {
        files: ['public/images/orphans/*.*'],
        tasks: ['copy:images', 'notify:watch_images']
    },
    scss_files: {
        files: ['app/**/*.scss', 'public/scss/**/*.scss'],
        tasks: ['sass', 'notify:watch_css']
    },
    html_files: {
        files: ['app/index.html'],
        tasks: ['copy:usemin', 'x_compile', 'notify:watch_index']
    },
    partial_files: {
        files: ['app/components/**/*.html', 'app/states/**/*.html'],
        tasks: ['copy:partials', 'notify:watch_partials']
    },
    express: {
        files: [
            'server/**/*.{js,json}'
        ],
        tasks: ['x_compile', 'notify:watch_js'],
        options: {
            livereload: true,
            nospawn: true //Without this option specified express won't be reloaded
        }
    }

};
