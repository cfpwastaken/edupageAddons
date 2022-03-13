async function getValue(k) {
    return (await browser.storage.sync.get(k))[k];
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "getValue") {
            sendResponse(await getValue(request.key));
        }
    }
);