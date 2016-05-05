'use strict';

//note: could be better? might get a bit messy, but the service is a direct dependency of this directive.
import prettify from '../../services/prettify';

let moduleName = 'styleguide.prettify.directive';

/**
 * note: could potentially make this live.
 *
 * Prettify Directive stw-prettify.
 */
function stwPrettify($log, prettifyService) {
    //require Google Code Prettify's css
    require('./stwPrettify.scss');

    //return the directive object for the directive in question.
    return {
        restrict: 'C',
        terminal: true,
        priority: 10000,
        scope:{
            language: '@language',
            linenums: '@lineNums'
        },
        link: function (scope, element) {
            if (element[0].tagName != 'PRE') {
                $log.warn('stw-prettify: use the directive on a pre tag to preserve whitespace.', element);
            }

            var htmlToPrettify = element.html();
            $log.debug('language', scope.language);
            $log.debug('linenums', scope.linenums);
            var prettified = prettifyService.prettify(htmlToPrettify, scope.language, scope.linenums);

            //note: could do the templating better here. (Think more varied use, textarea and in place?).
            element.replaceWith('<pre class="prettyprint">' + prettified + '</pre>');
        }
    };
}

stwPrettify.$inject = ['$log', 'prettifyService'];


angular.module(moduleName, [prettify])
    .directive('stwPrettify', stwPrettify)
    .run(function ($log) {
        $log.debug(moduleName + ' - run');
    });

export default moduleName;
