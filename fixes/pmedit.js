
console.log('pmedit loaded');
$('ul.user-actions').each(function (index, element) {
    var comment = $(element).closest('div.j-comment');    
    var commentID = $(comment).attr('data-id');
    $(element).prepend('<li class="user-action b-userAction-item user-action-edit tip responsive-bottom-nav-5" title="">\
        <a href="/comments/' + commentID + '/edit" class="comment-right-side-user-action">\
        <i class="u-icon u-icon-edit"></i>\
        <span class="label"> Edit\
        </span>\
        </a>\
        </li>');
});


//37345990

        