var publicCount = $("#tab-public").find("ul.listing-comments > li").filter(function() {
            return $(this).hasClass('no-results') === false;
}).length;
var privateCount = $("#tab-private").find("ul.listing-comments > li").filter(function() {
            return $(this).hasClass('no-results') === false;
}).length;

var publicTab = $('ul.b-tab-nav.tabbed-tabs').find('li.b-tab-item').filter(function() {
    return $(this).data('tab-id') === "#public";
}).find('span');
var privateTab = $('ul.b-tab-nav.tabbed-tabs').find('li.b-tab-item').filter(function() {
    return $(this).data('tab-id') === "#private";
}).find('span');

publicTab.text(publicTab.text() + " (" + publicCount + ")");
privateTab.text(privateTab.text() + " (" + privateCount + ")");