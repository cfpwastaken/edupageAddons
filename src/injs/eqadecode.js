// Get parameters from URL
function getUrlParameter(name) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);
	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Code from https://stackoverflow.com/questions/5129386/how-to-detect-when-history-pushstate-and-history-replacestate-are-used
// Very hacky script
var _wr = function(type) {
    var orig = history[type];
    return function() {
        var rv = orig.apply(this, arguments);
        var e = new Event(type);
        e.arguments = arguments;
        window.dispatchEvent(e);
        return rv;
    };
};
history.pushState = _wr('pushState');


window.addEventListener('pushState', function(e) {
    decode();
});

function decode() {
    if(getUrlParameter("eqa")) {
        console.log("[Edupage Addons] [EQA Decode] Decoding...");
        var eqa = getUrlParameter("eqa");
        var eqa_decoded = atob(decodeURIComponent(eqa));
        console.log("[Edupage Addons] [EQA Decode] Decoded: " + eqa_decoded);
        //window.location.href = window.location.href + "&eqadecoded=true&" + eqa_decoded;
        window.history.pushState("", "", window.location.origin + window.location.pathname + "?" + eqa_decoded);
    }
}

decode();