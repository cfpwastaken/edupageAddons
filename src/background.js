// Update Interval variable of every 10 minutes
var updateInterval = 10 * 60 * 1000;

var currentVersion = chrome.runtime.getManifest().version;

function update() {
    fetch("https://cfp.gotdns.ch/update/edupageaddons?ver=" + currentVersion).then(res => res.text()).then(res => {
        console.log(res);
        if(res != "false") {
            chrome.storage.local.get(null, (v) => {
                chrome.storage.local.set({
                    ...v,
                    'update': res
                });
            });
        } else {
            chrome.storage.local.get(null, (v) => {
                chrome.storage.local.set({
                    ...v,
                    'update': false
                });
            });
        }
    });
}

update();

setInterval(() => {
    update();
}, updateInterval);