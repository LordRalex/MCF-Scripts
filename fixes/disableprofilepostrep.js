doIfEnabled("disableProfilePostRep", true, function() {
    $("div.comment-rating-wrapper").each(function() {
        $(this).remove();
    });
});