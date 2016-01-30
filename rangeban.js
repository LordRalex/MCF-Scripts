ipMask = "x.y.z."
ban(ipMask, 0, 255);

function ban(mask, i, end) {
    if (i > end) {
        return;
    }
    $("#field-ipAddressToBan").val(mask + i);
    console.log('Banning ' + mask + i);
    $.post('/cp/ban-ip', $('form').serialize());
    setTimeout(ban, 1000, mask, i + 1, end);
}
