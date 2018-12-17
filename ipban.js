ipMask="A.B.C."
for(i=0; i <= 255; i++) {
    $("#field-ipAddressToBan").val(ipMask + i);
    $.ajax({"method": "post", "url": '/cp/ban-ip', data: $('form').serialize(), async: false});
}
