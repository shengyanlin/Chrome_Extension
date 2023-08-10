// Capture HTML of current page
let blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
let url = URL.createObjectURL(blob);

chrome.runtime.sendMessage({
    action: 'downloadHTML',
    url: url,
    suggestedName: 'page.html'
}, function(response) {
    if (chrome.runtime.lastError) {
        console.error("Error sending downloadHTML message:", chrome.runtime.lastError);
    } else {
        console.log("HTML download message sent successfully");
    }
});
