ipMask="x.y.z."
for(i=115; i <= 115; i++) {
    $("#field-ipAddressToBan").val(ipMask + i);
    $.post('/cp/ban-ip', $('form').serialize());
}