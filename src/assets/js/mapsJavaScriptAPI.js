

var CROSproxyURL = 'https://corsproxy.io/?';
var args = '';
var language = "ar";
if (typeof language != 'undefined') args += '&language=' + language;

var bypass = function (googleAPIcomponentJS, googleAPIcomponentURL) {
    if (googleAPIcomponentURL.toString().indexOf("common.js") == -1) {
        googleAPIcomponentJS.src = googleAPIcomponentURL;
    } else {
        var removeFailureAlert = function (googleAPIcomponentURL) {
            sendRequestThroughCROSproxy(googleAPIcomponentURL, (responseText) => {
                var script = document.createElement('script');
                script.innerHTML = responseText.replace(new RegExp(/;if.*Failure.*?\}/), ";").replace(new RegExp(/(\|\|\(\(\)=>\{\}\);.*\?.*?\()/), "$1true||").replace(/\{.*\/maps\/api\/js\/QuotaService.RecordEvent.*?\}\)\}/, '{}');
                document.head.appendChild(script);
            });
        }
        googleAPIcomponentJS.innerHTML = '(' + removeFailureAlert.toString() + ')("' + googleAPIcomponentURL.toString() + '")';
    }
}

var createAndExecutePayload = function (googleAPIjs) {
    var script = document.createElement('script');
    var appendChildToHeadJS = googleAPIjs.match(/(\w+)\.src=(_.*?);/);
    var googleAPIcomponentJS = appendChildToHeadJS[1];
    var googleAPIcomponentURL = appendChildToHeadJS[2];
    script.innerHTML = googleAPIjs.replace(appendChildToHeadJS[0], '(' + bypass.toString() + ')(' + googleAPIcomponentJS + ', ' + googleAPIcomponentURL + ');');
    document.head.appendChild(script);
}

sendRequestThroughCROSproxy('https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places&callback=initAutocomplete' + args, (googleAPIjs) => {
    createAndExecutePayload(googleAPIjs);
});

function sendRequestThroughCROSproxy(url, callback) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                if (callback) callback(this.responseText);
            } else {
                sendRequestThroughCROSproxy(url, callback);//retry
            }
        }
    };
    xhttp.open("GET", CROSproxyURL + encodeURIComponent(url), true);
    xhttp.send();

}