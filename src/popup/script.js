// document.getElementById('options').addEventListener('click', function(e) {
//     e.preventDefault();
//     // open options/options.html
//     browser.tabs.create({
//         url: browser.runtime.getURL('options/options.html')
//     });
// });
browser.tabs.create({
	url: browser.runtime.getURL('options/options.html')
});
window.close();