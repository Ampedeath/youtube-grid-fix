# YouTube Grid Fix — Choose 3 / 4 / 5 Videos per Row

### A clean and lightweight Tampermonkey userscript that restores YouTube grid layout.
### Choose how many videos appear per row: 3, 4, or 5 - directly from the Tampermonkey menu. 

Perfect for users who want a cleaner layout, better density, or just want YouTube to behave as it used to.

### Features

- Selectable grid size: 3, 4, or 5 videos per row

- Simple Tampermonkey menu controls - no code editing

- Automatic re-apply after navigation (SPA-friendly, survives YouTube reloads)

- Settings persist thanks to Tampermonkey storage

- Uses CSS Grid for a more stable and consistent layout

- Lightweight and runs quietly in the background

> **Note:** To keep the grid layout stable, the script hides some YouTube rich sections such as Shorts shelves, Breaking News, and similar recommendation blocks.


## Installation

1. **Install Tampermonkey**:

 - Chrome: https://www.tampermonkey.net/?ext=dhdg&browser=chrome
 - Firefox: https://www.tampermonkey.net/?ext=dhdg&browser=firefox

2. **Install the script by opening the RAW link:**

 - https://github.com/Ampedeath/youtube-grid-fix/raw/refs/heads/main/youtube-grid-fix.user.js

3. **Tampermonkey will automatically prompt you to Install.**

> ### Note: if you just installed Tampermonkey, you must allow it to use user scripts. 
> 1. Go to Extensions Management
> 2. Find Tampermonkey and click "Details"
> 3. Enable "Allow user scripts"

## How to Change Videos per Row

After installing the script, open the Tampermonkey menu.
You’ll see three options:

- YouTube Grid: 3 videos per row

- YouTube Grid: 4 videos per row

- YouTube Grid: 5 videos per row

Click your desired configuration, and YouTube will update instantly.


## Steps
   
> 1. ### First click on `Extensions` button  (Red arrow)
> 2. ### Then click on `Tampermonkey`  (Orange arrow)
   
<img width="344" height="640" alt="image" src="https://github.com/user-attachments/assets/60465676-69f8-4ddc-aea2-908c28764f42" />

> 3. ### In the menu that opens, select the option you need. 

<img width="500" height="440" alt="image" src="https://github.com/user-attachments/assets/842f4a61-08b7-4151-8237-efdd96ec1e55" />

## How It Works

The script replaces YouTube’s default video grid with a cleaner CSS Grid layout and applies the selected number of columns: 3, 4, or 5.

Your choice is saved automatically, so the layout stays the same after refreshing YouTube or reopening the browser.

YouTube loads pages dynamically, so the script also reapplies the layout after navigation without requiring a full page reload.

To keep the grid stable, some extra YouTube sections like Shorts shelves, Breaking News, or similar blocks may be hidden.

## Known Behavior

- Shorts shelves may be hidden
- Breaking News sections may be hidden
- Some recommendation blocks may be hidden
- The script is focused on keeping the main YouTube video grid consistent

## Author
***Ampedeath***

## Support

_If you find the script useful, please star the repository - it helps others discover it and motivates further improvements._
