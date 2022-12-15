// chrome.tabs.create({
//     url: 'options.html'
// });

chrome.runtime.onInstalled.addListener((reason) => {
    chrome.tabs.create({
        url: 'options.html',
        active: false
    });
    chrome.contextMenus.create({ contexts: ['editable'], id: 'Nowan', title: 'Nowan' });
});