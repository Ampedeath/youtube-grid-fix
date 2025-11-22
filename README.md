# YouTube Grid Fix — Choose 3 / 4 / 5 Videos per Row

### A clean and lightweight Tampermonkey userscript that restores YouTube grid layout.
### Choose how many videos appear per row: 3, 4, or 5 - directly from the Tampermonkey menu. 

Perfect for users who want a cleaner layout, better density, or just want YouTube to behave as it used to.

## Features

- Selectable grid size: 3, 4, or 5 videos per row

- Simple Tampermonkey menu controls - no code editing

- Automatic re-apply after navigation (SPA-friendly, survives YouTube reloads)

- Settings persist thanks to Tampermonkey storage

- Lightweight, zero overhead, stable

- Compatible with all YouTube pages


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

- 3 videos per row

- 4 videos per row

- 5 videos per row

Click your desired configuration, YouTube will updates instantly.


## Steps
   
> 1. ### First click on `Extensions` button  (Red arrow)
> 2. ### Then click on `Tampermonkey`  (Orange arrow)
   
<img width="344" height="640" alt="image" src="https://github.com/user-attachments/assets/60465676-69f8-4ddc-aea2-908c28764f42" />

> 3. ### In the menu that opens, select the option you need. 

<img width="500" height="440" alt="image" src="https://github.com/user-attachments/assets/842f4a61-08b7-4151-8237-efdd96ec1e55" />

## How It Works

The script modifies YouTube’s internal CSS variable:
`--ytd-rich-grid-items-per-row`
A MutationObserver ensures the layout stays correct even as YouTube reloads content dynamically.

Your choice (3/4/5) is saved via Tampermonkey (`GM_setValue()`).

Everything runs quietly in the background.

## Author
***Ampedeath***

## Support

_If you find the script useful, please star the repository - it helps others discover it and motivates further improvements._
