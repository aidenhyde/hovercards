require('./google-analytics-background')();
require('./service-background')();

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, { code: 'window.top.postMessage({ msg: \'activate\', by: \'carlito\', url: \'' + tab.url + '\' }, \'*\');' });
});
