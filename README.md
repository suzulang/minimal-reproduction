[playground](https://codesandbox.io/p/github/suzulang/minimal-reproduction/draft/nervous-feynman?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clup1afde00063b6fzolb26e2%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clup1afde00023b6fpdtjjkr9%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clup1afde00043b6fhyjw5wti%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clup1afde00053b6frofp4x6e%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clup1afde00023b6fpdtjjkr9%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clup1afde00013b6f4lqsendp%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clup1afde00023b6fpdtjjkr9%2522%252C%2522activeTabId%2522%253A%2522clup1afde00013b6f4lqsendp%2522%257D%252C%2522clup1afde00053b6frofp4x6e%2522%253A%257B%2522id%2522%253A%2522clup1afde00053b6frofp4x6e%2522%252C%2522activeTabId%2522%253A%2522clup1bnnn002i3b6f04rwae3h%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A4321%252C%2522id%2522%253A%2522clup1bnnn002i3b6f04rwae3h%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%2522%257D%255D%257D%252C%2522clup1afde00043b6fhyjw5wti%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clup1afde00033b6fan1uflvq%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clup1ah0q0019ddi9h6rwh4mx%2522%257D%255D%252C%2522id%2522%253A%2522clup1afde00043b6fhyjw5wti%2522%252C%2522activeTabId%2522%253A%2522clup1afde00033b6fan1uflvq%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)
<br/>
To create a minimal reproduction of the issue I'm encountering with Astro DB, follow these steps to set up the environment and observe the error in action. This process will guide you through installing the necessary dependencies and running the development server to replicate the problem.

**Setup Instructions for Minimal Reproduction**
**Navigate to the Project Directory:**
First, change into the project directory with the command:


`cd minimal-astro-db`
**Install Dependencies:**
Use `pnpm` to install the required dependencies:


`pnpm install`
**Start the Development Server:**
Launch the development server to see the error by running:


`npm run dev`
At this point, you should encounter the error we're focusing on.

**Modifying the Project to Address the Error**
To attempt fixing the issue, you can make a specific change in the project configuration:

**Edit the Database Configuration:**
Open the minimal-astro-db/db/config.ts file for editing.

**Update the Column Definition:**
Modify the column definition from author: column.text(), to authorId: column.number(),. This change aligns the column definition with the expected data type.

**Re-run the Development Server:**
After making the change, restart the development server to see if the issue is resolved:


`npm run dev`
By following these steps, you can reproduce the error and test a potential fix. This process is crucial for diagnosing and resolving issues efficiently. Please share your findings and any further issues you encounter.