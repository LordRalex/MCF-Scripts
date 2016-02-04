var footer = $("#tab-security div.form-footer");

var clearWl = $('<a class="button" href="#" id="clear-whitelist">Clear whitelist</a>');
footer.append(clearWl);

$("#clear-whitelist").on('click', function (e) {
    $(".j-user-ip-whitelisted:checked").each(function (index, checkbox) {
        $.post("whitelist-ip/" + checkbox.value);
        $(checkbox).prop('checked', false);
    });
});