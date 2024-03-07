# dorsuch 
## Chrome extension
Finds the empty suite in Cornell dorm for buddies to live together :D

## Features
- Automatically injects content scripts into webpages.
- Monitors navigation events to trigger script injection.
- Identifies and processes data related to suite availability.

## Installation
To install the Dorsuch Chrome extension, follow these steps:
1. Clone or download this repository to your local machine.
2. Open Google Chrome.
3. Navigate to `chrome://extensions/`.
4. Enable **Developer mode** in the top-right corner if it's not already enabled.
5. Click on **Load unpacked**.
6. Select the directory where you cloned/downloaded the repository.
7. The extension should now be installed and ready to use.

## Usage
1. Ensure the Dorsuch extension is installed and enabled in Chrome.
2. Navigate to a supported webpage, which is `https://reports.scl.cornell.edu/bedavailabilitybyroom`.
3. The extension will automatically detect the page and analyze the suite availability data. The current filter condition is to find 4 occurring suite rooms.
4. View the results in the console.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
