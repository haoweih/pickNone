// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
});
