# GCG Extension

The GCG Extension is designed for the Chrome browser, enabling users to capture screenshots and retrieve the HTML code of the current page.

## Features

1. **Capture Screenshots**: Users can capture the current visible tab's screenshot by clicking a button in the popup.
2. **Retrieve HTML Code**: The extension automatically saves the HTML content of the current page.

## How to Use

1. Install and enable the GCG Extension.
2. Click on the GCG icon in the toolbar.
3. In the popup that appears, click the "Click me to Download" button.
4. The extension will automatically capture a screenshot and retrieve the HTML code. Once done, a "Download Complete" message will be shown in the popup.

## Required Permissions

- **activeTab**: Access the current active tab.
- **tabs**: Interact with browser tabs.
- **scripting**: Inject and execute scripts.
- **downloads**: Manage download tasks.
- **host_permissions**: Access to all websites.

## Development Details

- **Manifest Version**: 3
- **Extension Version**: 1.0.0
- **Developer Notes**:
    - `background.js` listens for messages from content scripts or the popup to manage downloads.
    - `content.js` retrieves the HTML content from the page.
    - `popup.html` provides the UI in the popup for user interaction.
    - `popup.js` handles button clicks to execute screenshot capturing and HTML retrieval functions.

## Contact

For questions or feedback, please reach out at [shengyanlin0503@gmail.com](mailto:shengyanlin0503@gmail.com).

