/**
 * remove and replace items not needed in the snapshot
 * @returns {unresolved}
 * 
 * 1. /ng\-(([if]|[repeat]|[bind\-html]|[href])*?)="(.*?)"/g - remove the old ng- elements
 * 2. /<style(.*?)style>/g - remove injected style
 * 3. /><head>/g add ng-app tag attribute to bootstrap angulat
 * 4. /<!-- snapshot:debug[^]*snapshot:debug-end -->/ - remove debug states
 * 5. /(<!-- snapshot:)(.*?)( -->)/ - uncomment snapshot items
 */

module.exports = function(content) {
  return content
          .replace(/ng\-(([if]|[repeat]|[include]|[bind\-html]|[href])*?)="(.*?)"/g, '')
          .replace(/<style(.*?)style>/g, '')
          .replace(/><head>/g, ' ng-app="app"><head>')
          .replace(/ touch ng\-scope/g, '')
          .replace(/ animate/g, '')
          .replace(/cs-cookie show/g, 'cs-cookie')
          .replace(/src="http:/g, 'src=\"https:')
          .replace(/<!-- snapshot:debug[^]*snapshot:debug-end -->/g, '')
          .replace(/(<!-- snapshot:production)([^]*?)(-->)/gm, "$2");
};
