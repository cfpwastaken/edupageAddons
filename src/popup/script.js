document.getElementById('options').addEventListener('click', function(e) {
    e.preventDefault();
    chrome.runtime.openOptionsPage();
});