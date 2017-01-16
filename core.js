function forceDisableOptions() {
    chrome.storage.sync.set({
        enableProfilePostDelete: false
    });
}

function doIfEnabled(flag, def, callback) {
    forceDisableOptions();
    chrome.storage.sync.get({
        [flag]: def
    }, function (enabled) {
        if (enabled[flag]) {
            callback();
        }
    });
}