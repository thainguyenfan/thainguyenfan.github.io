function getURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

var qrcode = getURLParameter("qrCode");
var qrcodeVar = document.getElementById('#qrcode');
if(qrcodeVar != null)
{
    document.getElementById('qrcode').value = qrcode != null ? qrcode : "Họ và tên (Mã code)";
}