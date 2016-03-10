function doIfEnabled(flag, callback) {
    chrome.storage.sync.get(flag, function (enabled) {
        if (enabled[flag]) {
            callback();
        }
    });
}