doIfEnabled('enableUnreadThreadFix', true, function () {
    $('tr.forum-thread-row-unread').find('a.title').each(function () {
        $(this).css({"font-weight": "bold"});
    });

    $('tr.forum-row-not-seen-latest-thread').find('h4.title > a').each(function () {
        $(this).css({"font-weight": "bold"});
    });
});
