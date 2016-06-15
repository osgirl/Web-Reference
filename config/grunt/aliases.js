module.exports = function (grunt, options) {
    return {
        'build': [
            'clean:build',
            'copy:fonts',
            'copy:partials',
            'copy:usemin',
            'copy:images',
            'copy:kayako',
            'copy:appletouch',
            'copy:kissmetrics',
            'copy:calculator',
            'copy:svg',
            'copy:root_assets',
            'sass',
            'autoprefixer',
            'x_compile'
        ],
        'dev': [
            'x_codeStyle',
            'build',
            'express:dev',
            'open',
            'notify:server',
            'watch'
        ],
        'snapshot': [
            'express:snapshot',
            'html_snapshots:release',
            'uglify:snapshot',
            'filerev:prodPre',
            'filerev_replace:css',
            'filerev:prodPost',
            'filerev_replace:html',
            'filerev_replace:about',
            'filerev_replace:blog',
            'filerev_replace:jobs',
            'filerev_replace:calculator',
            'filerev_replace:terms',
            'filerev_replace:privacy',
            'filerev_replace:getintouch'
        ],
        'snapshot-dev': [
            'html_snapshots:debug',
            'concat:snapshot'
        ],
        verify: [
            'jshint',
            'karma:light',
            'parker',
            'bytesize'
        ],
        'x_compile': [
            'useminPrepare',
            (options.production) ? 'uglify:generated' : 'concat:generated',
            'usemin',
            'preprocess:html'
        ],
        'x_codeStyle': [
            'jshint'
        ]
    };
};
