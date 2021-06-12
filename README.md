# Monday.com Harvest Time Tracking Button
Custom JS to add Harvest time tracking buttons to Monday.com


## What it does
Adds a Harvest time tracking button inside the right side panel for Monday.com tasks, allowing you to easily track time on a particular task on one click.

![Harvest Button in Monday.com Sidebar](https://user-images.githubusercontent.com/1610328/82766038-7b8fc700-9dd0-11ea-93e7-6482812f00ee.png)
![Start Tracking Time in Harvest Window](https://user-images.githubusercontent.com/1610328/82766039-7cc0f400-9dd0-11ea-9e67-1ec6af76bfe0.png)

### Features
* Link to the Monday.com item is automatically added with the time record in Harvest.com interface
* Project ID and name is synced to Harvest.com, so you won't need to remember to select the project each time
* Create a new project in Harvest if there isn't one already linked in just one click from the top right corner of the Harvest popup

## How to install
* This plugin requires the Chrome Custom Javascript browser extension from here: https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk?hl=en

1. Install the above plugin in Chrome
2. Browse over to any page in your monday.com account
3. Click the CJS extension icon in your chrome toolbar to open the extension (might be hiding under the menu 3 dots icon)
4. Slide the toggle to enable in top right. Then click the "your own external scrips" link and paste in the following into the external scripts window:
`//platform.harvestapp.com/assets/platform.js;`
5. In the main plugin window where it says paste your code here, paste in the [custom javascript code](https://raw.githubusercontent.com/jkushner/monday-com-harvest-integration/master/custom-code.js).
6. In the code you just pasted, look for YOUR-SUBDOMAIN-HERE and replace it with your monday.com account subdomain. Then press Save in the CJS extension window.
6. Then refresh and when you open a task, you'll see the little orange timer button in the top right of the sidebar.

## FAQs
* Do I need to install the Harvest chrome plugin too?
Nope, not required for this to work.
