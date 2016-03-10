console.log('Loading options');

function save_options() {
    var enableAppealPostCount = document.getElementById('enableAppealPostCount').checked;
    var enableWhitelistClear = document.getElementById('enableWhitelistClear').checked;
    var enableProfilePostDelete = document.getElementById('enableProfilePostDelete').checked;
    var enableUnreadThreadFix = document.getElementById('enableUnreadThreadFix').checked;
    var enableThreadDelete = document.getElementById('enableThreadDelete').checked;
    chrome.storage.sync.set({
        enableAppealPostCount: enableAppealPostCount,
        enableWhitelistClear: enableWhitelistClear,
        enableProfilePostDelete: enableProfilePostDelete,
        enableUnreadThreadFix: enableUnreadThreadFix,
        enableThreadDelete: enableThreadDelete
    }, function () {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 2000);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        enableAppealPostCount: true,
        enableWhitelistClear: true,
        enableProfilePostDelete: true,
        enableUnreadThreadFix: true,
        enableThreadDelete: true
    }, function (items) {
        document.getElementById('enableAppealPostCount').checked = items.enableAppealPostCount;
        document.getElementById('enableWhitelistClear').checked = items.enableWhitelistClear;
        document.getElementById('enableProfilePostDelete').checked = items.enableProfilePostDelete;
        document.getElementById('enableUnreadThreadFix').checked = items.enableUnreadThreadFix;
        document.getElementById('enableThreadDelete').checked = items.enableThreadDelete;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);