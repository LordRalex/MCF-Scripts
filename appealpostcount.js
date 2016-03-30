doIfEnabled('enableAppealPostCount', true, function () {
    var publicCount = $('#tab-public').find('ul.listing-comments > li').filter(function () {
        return $(this).hasClass('no-results') === false;
    }).length;
    var privateCount = $('#tab-private').find('ul.listing-comments > li').filter(function () {
        return $(this).hasClass('no-results') === false;
    }).length;

    var publicTab = $('ul.b-tab-nav.tabbed-tabs').find('li.b-tab-item').filter(function () {
        return $(this).data('tab-id') === '#public';
    }).find('span');
    var privateTab = $('ul.b-tab-nav.tabbed-tabs').find('li.b-tab-item').filter(function () {
        return $(this).data('tab-id') === '#private';
    }).find('span');

    publicTab.text(publicTab.text() + ' (' + publicCount + ')');
    privateTab.text(privateTab.text() + ' (' + privateCount + ')');
});

doIfEnabled('enableAppealPostMerge', true, function () {
    var publicForm = $('#tab-public').find('form.comment-form');
    var actionUrl = publicForm.attr('action');
    var publicEntityId = publicForm.attr('data-entity-id');
    var postPublicButton = publicForm.find('button.u-button-primary');
    var privateForm = $('#tab-private').find('form.comment-form');
    var privateEntityId = privateForm.attr('data-entity-id');
    var postPrivateButton = privateForm.find('button.u-button-primary');

    $('#tab-private').removeAttr('style');
    $('#appeal-tabs').find('div.scroll-container').remove();
    $('#tab-private').find('div.comment-preview').remove();
    $('#tab-private').find('#reply').remove();

    publicForm.attr('action', null);
    publicForm.attr('data-entity-id', null);
    actionUrl = actionUrl.match(/(.)*(?=-)/g)[0];
    postPublicButton.attr('data-action', actionUrl + '-' + publicEntityId);
    postPublicButton.attr('data-entity-id', publicEntityId);
    postPublicButton.text('Post Public Reply');
    postPublicButton.attr('type', null);
    postPrivateButton.attr('data-action', actionUrl + '-' + privateEntityId);
    postPrivateButton.attr('data-entity-id', privateEntityId);
    postPrivateButton.text('Post Private Reply');
    postPrivateButton.attr('type', null);

    var buttonBlock = publicForm.find('div.form-button-block');
    postPrivateButton.remove();
    postPublicButton.remove();
    buttonBlock.append(postPrivateButton);
    buttonBlock.append(postPublicButton);

    var submitFunction = function (e) {
        var form = $('#tab-public').find('form.comment-form');
        var element = $(e.toElement);
        form.attr('data-entity-id', $(e.toElement).attr('data-entity-id'));
        form.attr('action', $(e.toElement).attr('data-action'));
        form.find('#field-parent-entity').attr('value', form.attr('data-entity-type-id') + ':' + element.attr('data-entity-id'));
    };

    postPrivateButton.on('click', submitFunction);
    postPublicButton.on('click', submitFunction);
});