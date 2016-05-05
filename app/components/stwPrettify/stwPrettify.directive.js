'use strict';

//todo: could be better? might get a bit messy, but the service is a direct dependency of this directive.
import prettify from '../../services/prettify';

let moduleName = 'styleguide.prettify.directive';

/**
 * todo: pull optional language from directive attributes using attr
 * todo: kill whitespace at the end of the string
 * todo: could potentially make this live.
 * todo: check the processing order, see if we can do optional ng eval? or if eval is disabled.
 * todo: controller may be useful for post-link/update?
 * todo: transcludeFn?
 *
 * Prettify Directive stw-prettify.
 * usage
 */
function stwPrettify($log, prettifyService) {
    //require Google Code Prettify's css
    require('./stwPrettify.scss');

    //return the directive object for the directive in question.
    return {
        restrict: 'C',
        replace: true,
        link: function (scope, element) {
            if (element[0].tagName != 'PRE') {
                $log.warn('stw-prettify: use the directive on a pre tag to preserve whitespace.', element);
            }
            if(element.parent().hasClass('stw-prettify')){
                $log.debug('Element is nested within another prettify element. Assuming demonstration of itself.')
                return;
            }

            var htmlToPrettify = element.html();
            var prettified = prettifyService.prettify(htmlToPrettify);

            //todo: could do the templating better here. (Think more varied use, textarea and in place?).
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
