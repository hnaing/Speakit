// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response) { //chrome.extension.sendRequest?
        texttospeak(response.data);
    });
});

var speakListener = function(utterance, options, sendTtsEvent) {
    sendTtsEvent({'event_type': 'start', 'charIndex': 0})

    // start speaking

    sentTtsEvent({'event_type': 'end', 'charIndex': utterance.length})

};

var stopListener = function() {
    // stop all speech
};

function texttospeak(selectedText) {
    var service = "http://www.google.com/search?q=" + selectedText;
    chrome.tabs.create({url: service});
    // chrome.ttsEngine.onSpeak.addListener(speakListener);
    // chrome.ttsEngine.onStop.addListener(stopListener);
}


// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });