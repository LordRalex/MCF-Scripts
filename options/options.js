console.log('Loading options');

function save_options() {
    var enableAppealPostCount = document.getElementById('enableAppealPostCount').checked;
    var enableWhitelistClear = document.getElementById('enableWhitelistClear').checked;
    var enableProfilePostDelete = document.getElementById('enableProfilePostDelete').checked;
    var enableUnreadThreadFix = document.getElementById('enableUnreadThreadFix').checked;
    var enableThreadDelete = document.getElementById('enableThreadDelete').checked;
    var enableAppealPostMerge = document.getElementById('enableAppealPostMerge').checked;
    var disableQuickModTools = document.getElementById('disableQuickModTools').checked;
    var disableProfilePostRep = document.getElementById('disableProfilePostRep').checked;
    var enableProfilePostStatus = document.getElementById('enableProfilePostStatus').checked;
    chrome.storage.sync.set({
        enableAppealPostCount: enableAppealPostCount,
        enableWhitelistClear: enableWhitelistClear,
        enableProfilePostDelete: enableProfilePostDelete,
        enableUnreadThreadFix: enableUnreadThreadFix,
        enableThreadDelete: enableThreadDelete,
        enableAppealPostMerge: enableAppealPostMerge,
        disableQuickModTools: disableQuickModTools,
        disableProfilePostRep: disableProfilePostRep,
        enableProfilePostStatus: enableProfilePostStatus
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
        enableThreadDelete: true,
        enableAppealPostMerge: true,
        disableQuickModTools: true,
        disableProfilePostRep: true,
        enableProfilePostStatus: true
    }, function (items) {
        for(var key in items) {
            if(items.hasOwnProperty(key)) {
                document.getElementById(key).checked = items[key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);