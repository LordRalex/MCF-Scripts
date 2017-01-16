doIfEnabled("enableProfilePostStatus", true, function () {
    $("ul.listing.listing-comment.comment-listing").each(function () {
        $(this).addClass('p-comments');
    });
});