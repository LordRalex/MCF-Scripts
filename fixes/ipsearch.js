var re = /.*[\s\S]\/cp\/users\?filter-ip-address=/g;

$('a').each(function (index, element) {
    var link = element.href;
    if (re.test(link)) {
        var ip = link.replace(re, '');
        var newLink = 'http://www.minecraftforum.net/cp/users?filter-search-by=4&filter-search-text=' + ip;
        element.href = newLink;
    }
});