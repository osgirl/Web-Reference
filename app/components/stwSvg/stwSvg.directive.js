/**
 * stwSvg Directive
 * @namespace Directives
 */

'use strict';

let svg = {
    equifax: require('./svg/equifax.svg'),
    dashboard: require('./svg/dashboard.svg'),
    accounts: require('./svg/accounts.svg'),
    arrow: require('./svg/arrow.svg'),
    close: require('./svg/close.svg'),
    addresses: require('./svg/address.svg'),
    corrections: require('./svg/corrections.svg'),
    expand: require('./svg/expand.svg'),
    help: require('./svg/help.svg'),
    link: require('./svg/link.svg'),
	header: require('./svg/water-drop.svg'),
    info: require('./svg/info.svg'),
    star: require('./svg/star.svg'),
    starOutline: require('./svg/star_outline.svg'),
    starFill: require('./svg/star_fill.svg'),
    overview: require('./svg/overview.svg'),
    personal: require('./svg/personal.svg'),
    personalSecondary: require('./svg/personal-secondary.svg'),
    searches: require('./svg/searches.svg'),
    report: require('./svg/report.svg'),
    offers: require('./svg/offers.svg'),
    timeline: require('./svg/timeline.svg'),
    goals: require('./svg/goals.svg'),
    logout: require('./svg/logout.svg'),
    user: require('./svg/user.svg'),
    cross: require('./svg/cross.svg'),
    eye: require('./svg/eye.svg'),
    tick: require('./svg/tick.svg'),
    direction: require('./svg/dashboard-direction.svg'),
    dashHelp: require('./svg/dashboard-help.svg'),
    dashClose: require('./svg/dashboard-close.svg'),
    play: require('./svg/play.svg'),
    spinner: require('./svg/spinner.svg'),
    linked: require('./svg/linked.svg'),
    balancetransfer: require('./svg/balance_transfer.svg'),
    purchase: require('./svg/low_interest.svg'),
    poorcredit: require('./svg/poor_credit.svg'),
    eligibility: require('./svg/eligibility.svg'),
    done: require('./svg/done.svg'),
    notification: require('./svg/notification.svg'),
    cashback: require('./svg/cashback.svg'),
    rewards: require('./svg/rewards.svg')
};

let baseSvg = {
    prepend: '<svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" style="fill:currentcolor' +
    '' +
    ';vertical-align:middle;">',
    append: '</svg>'
};

let moduleName = 'stw.stwSvg';

function stwSvg($compile) {
    require('./stwSvg.scss');
    return {
        restrict: 'A',
        replace: true,
        scope: {},
        link: function(scope, elm, attrs) {
            var string = '';

            if (attrs.original) {
                string = svg[attrs.icon];
            } else {
                string = baseSvg.prepend + svg[attrs.icon] + baseSvg.append;
            }

            elm.html(string);
            $compile(elm.contents())(scope);

            if (attrs.size) {
                var svgEl = elm.find('svg')[0];
                svgEl.style.width = attrs.size;
                svgEl.style.height = attrs.size;
            }
        }
    };
}

stwSvg.$inject = ['$compile'];

angular.module(moduleName, [])
    .directive('stwSvg', stwSvg);

export default moduleName;
