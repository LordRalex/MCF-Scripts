doIfEnabled('enableProfilePostDelete', true, function () {
    var postDiv = document.getElementsByClassName("listing-body")[0];
    var table = $('<table class="listing listing-forum-thread forum-thread-listing b-table b-table-a">' +
            '<thead class="b-table-header j-listing-table-header">' +
            '<tr>' +
            '<th class="b-table-heading col-actions" style="colspan: 10;">' +
            '</th>' +
            '<th class="b-table-heading col-actions" style="colspan: 0;">' +
            '<input type="checkbox" class="col-actions-select-all">' +
            '</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody class="filtered" style="display: none">' +
            '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
            '</tbody>' +
            '</table>');
    postDiv.insertBefore(table[0], postDiv.firstChild);
});
