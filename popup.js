document.getElementById('captureBtn').addEventListener('click', function() {
  // 隱藏按鈕
  document.getElementById('captureBtn').style.display = 'none';
  
  // 截圖當前可見選項卡
  chrome.tabs.captureVisibleTab(null, {format: 'png'}, function(dataUrl) {
    chrome.runtime.sendMessage({ action: "downloadImage", url: dataUrl, suggestedName: "screenshot.png" });

    // 執行 content.js
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let tab = tabs[0];
        if(chrome.scripting && chrome.scripting.executeScript) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['content.js']
            }, function(results) {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                    return;
                }
            
                // 顯示完成訊息
                document.getElementById('message').style.display = 'block';
            });
        } else {
            console.error("chrome.scripting.executeScript is not available");
        }
    });
  });
});
