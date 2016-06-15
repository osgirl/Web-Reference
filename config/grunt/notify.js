module.exports = function () {
    return {
        watch_css: {
            options: {
                title: 'Compass Complete',
                message: 'CSS has been compiled'
            }
        },
        watch_js: {
            options: {
                title: 'JS Complete',
                message: 'CSS has been compiled'
            }
        },
        watch_images: {
            options: {
                title: 'Images Moved',
                message: 'New images are available'
            }
        },
        watch_svg: {
            options: {
                title: 'SVGs Moved',
                message: 'New SVGs are available'
            }
        },
        watch_index: {
            options: {
                title: 'Index Updated',
                message: 'You need to refresh to view changes'
            }
        },
        watch_partials: {
            options: {
                title: 'HTML Updated',
                message: 'Your changes have been updated'
            }
        },

        server: {
            options: {
                title: 'Server is ready!',
                message: 'Visit http://localhost:3000 to view'
            }
        }
    }
};