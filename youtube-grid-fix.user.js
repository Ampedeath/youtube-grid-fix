// ==UserScript==
// @name         YouTube 4 Videos Per Row Fix|Size fix.
// @namespace    https://youtube.com/
// @version      1.2.0
// @description  Choose 3, 4, or 5 videos per row on YouTube using a Tampermonkey menu.
// @author       Ampedeath
// @license      MIT
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const DEFAULT_COLUMNS = 4;
    const STORAGE_KEY = 'youtubeGridFixColumns';
    const STYLE_ID = 'youtube-grid-fix-style';
    const ENABLED_CLASS = 'youtube-grid-fix-enabled';
    const CSS_COLUMNS_VARIABLE = '--youtube-grid-fix-columns';

    const ALLOWED_COLUMNS = [3, 4, 5];

    let applyTimeoutId;

    const getColumns = () => {
        const savedValue = Number(GM_getValue(STORAGE_KEY, DEFAULT_COLUMNS));

        return ALLOWED_COLUMNS.includes(savedValue)
            ? savedValue
            : DEFAULT_COLUMNS;
    };

    const setColumns = (columns) => {
        if (!ALLOWED_COLUMNS.includes(columns)) {
            return;
        }

        GM_setValue(STORAGE_KEY, columns);
        scheduleApplyGridFix();
    };

    const injectStyles = () => {
        if (document.getElementById(STYLE_ID)) {
            return;
        }

        const style = document.createElement('style');
        style.id = STYLE_ID;

        style.textContent = `
            html.${ENABLED_CLASS} {
                ${CSS_COLUMNS_VARIABLE}: ${DEFAULT_COLUMNS};
            }

            html.${ENABLED_CLASS} ytd-rich-grid-renderer #contents {
                display: grid !important;
                grid-template-columns: repeat(var(${CSS_COLUMNS_VARIABLE}), minmax(0, 1fr)) !important;
                column-gap: 16px !important;
                row-gap: 32px !important;
                align-items: start !important;
            }

            html.${ENABLED_CLASS} ytd-rich-grid-renderer #contents > ytd-rich-item-renderer {
                width: 100% !important;
                max-width: 100% !important;
                min-width: 0 !important;
                margin: 0 !important;
            }

            html.${ENABLED_CLASS} ytd-rich-grid-renderer #contents > ytd-rich-section-renderer {
                display: none !important;
            }

            html.${ENABLED_CLASS} ytd-rich-grid-renderer #contents > ytd-continuation-item-renderer {
                grid-column: 1 / -1 !important;
                width: 100% !important;
                max-width: 100% !important;
            }

            html.${ENABLED_CLASS} ytd-rich-item-renderer ytd-thumbnail,
            html.${ENABLED_CLASS} ytd-rich-item-renderer ytd-playlist-thumbnail,
            html.${ENABLED_CLASS} ytd-rich-item-renderer #thumbnail,
            html.${ENABLED_CLASS} ytd-rich-item-renderer yt-image,
            html.${ENABLED_CLASS} ytd-rich-item-renderer img {
                width: 100% !important;
                max-width: 100% !important;
            }
        `;

        document.head.appendChild(style);
    };

    const applyGridFix = () => {
        injectStyles();

        const columns = getColumns();

        document.documentElement.classList.add(ENABLED_CLASS);
        document.documentElement.style.setProperty(
            CSS_COLUMNS_VARIABLE,
            columns.toString()
        );
    };

    const scheduleApplyGridFix = () => {
        clearTimeout(applyTimeoutId);

        applyTimeoutId = setTimeout(() => {
            applyGridFix();
        }, 150);
    };

    GM_registerMenuCommand('YouTube Grid: 3 videos per row', () => setColumns(3));
    GM_registerMenuCommand('YouTube Grid: 4 videos per row', () => setColumns(4));
    GM_registerMenuCommand('YouTube Grid: 5 videos per row', () => setColumns(5));

    scheduleApplyGridFix();

    window.addEventListener('yt-navigate-finish', scheduleApplyGridFix);
    window.addEventListener('yt-page-data-updated', scheduleApplyGridFix);
    window.addEventListener('popstate', scheduleApplyGridFix);
    window.addEventListener('resize', scheduleApplyGridFix);

    const observer = new MutationObserver(scheduleApplyGridFix);

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
