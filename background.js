chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message:", message);
  if (message.action === 'downloadImage' || message.action === 'downloadHTML') {
      chrome.downloads.download({
          url: message.url,
          filename: message.suggestedName
      }, function(downloadId) {
          if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
          } else {
              console.log('Download started with ID:', downloadId);
          }
      });
  }
});
