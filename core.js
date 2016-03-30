function doIfEnabled(flag, def, callback) {
    chrome.storage.sync.get({
        [flag]: def
    }, function (enabled) {
        if (enabled[flag]) {
            callback();
        }
    });
}