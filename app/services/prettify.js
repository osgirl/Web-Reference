/**
 * todo: ng-doc/es-doc for correct tags/metadata
 * Prettify Service wrapper for Google Code Prettify use.
 * usage:
 * - prettify(plain html, language):
 *      returns prettified text using google code prettify.
 * - htmlEncode(plain html)
 *      returns html encoded text using the browser's inbuilt encoding.
 */
let moduleName = 'styleguide.prettify.service';

function PrettifyService($window){
    //vendor.js currently includes google-code-prettify from bower
    //May or may not run before here? might need to confirm execution path
    //Adds to the global scope prettyPrintOne (prettyPrint one element).
    // Also adds prettyPrint which scrapes the page for elements pre/code.prettify which we'd be best avoiding.

    let service = {
        prettify: prettify,
        htmlEncode: htmlEncode
    };

    //Note: language should be optional
    function prettify(html, language){
        if(!html) return '';

        let reindented = reindent(html);
        let encoded = htmlEncode(reindented);

        return $window.prettyPrintOne(encoded, language);
    }

    //Quick HTML Encode using the browser.
    //This is to avoid having to HTML Encode manually.
    function htmlEncode(html){
        return document.createElement( 'a' )
            .appendChild(document.createTextNode(html))
            .parentNode.innerHTML;
    }

    //Reindent.
    //Intended use is on a PRE tag which will keep any initial indentation.
    function reindent(html){
        //Get the initial indentation of the first line
        let initialIndentation = html.match(/^\s+/);

        //return if there's no initial indentation
        if(!initialIndentation || !initialIndentation[0]) return html;

        //Remove the initial indentation from the first line.
        let matchFirstLine = new RegExp('^' + initialIndentation[0]);
        let removedIndentationFirstLine = html.replace(matchFirstLine, '');

        //Remove the initial Indentation from subsequent lines
        let matchNewLines = new RegExp('\n' + initialIndentation[0], 'g');
        let removedIndentationNewLines = removedIndentationFirstLine.replace(matchNewLines, '\n');

        //remove any whitespace from the end of the string and return
        return removedIndentationNewLines.replace(/\s+$/, '');
    }

    return service;
}

PrettifyService.$inject = ['$window'];

angular.module(moduleName, [])
    .service('prettifyService', PrettifyService);

export default moduleName;