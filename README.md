# Chrome Extension - Webpage Screenshot & HTML Downloader

This Chrome extension allows users to capture a screenshot of the currently visible part of a webpage and download its HTML source.

## Features

1. One-click screenshot of the current webpage.
2. Automatically download the HTML source of the current webpage.

## Installation Instructions

1. Open the Chrome browser.
2. Navigate to `chrome://extensions/`.
3. Enable "Developer mode".
4. Click on "Load unpacked" and select the folder containing this extension.

## How to Use

1. After installing and activating the extension, go to the webpage you wish to capture and download.
2. Click on the extension icon in the toolbar.
3. In the pop-up window, click the "Click me to Download" button.
4. The extension will automatically capture the screenshot and download the webpage's HTML.

## Development Information

### `popup.js`

This script is responsible for UI interactions like button click events and invoking the `content.js` script.

### `content.js`

This script captures the HTML of the current webpage and passes it to the background script for downloading.

## Known Issues

- [List any known issues or limitations]

## Contact the Developer

If you encounter any issues while using this extension or have any suggestions and feedback, please contact shengyanlin0503@gmail.com.

---

Thank you for using this extension!
