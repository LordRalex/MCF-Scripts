doIfEnabled("disableQuickModTools", true, function() {
    $("div.thread-actions").each(function() {
        $(this).remove();
    });
});