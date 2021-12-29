## Undeployed Changes

### v7.1.4

- Status: **Beta**
- Changelog:

  - User facing changes:

    - Added rarity field on My Collection Artwork form - Sam
    - Tooltip for select components on storybooks - sam
    - WebView is used now to open terms of service pages on login and sign in screens
    - Update home placeholder's order
    - Adjust Select border color - ole
    - Updated 'required' indicator for inputs and selects from `*` to `Required` - ole
    - Margins are applied to the touchable opacity of 'Action results for artists you follow' items, as a result clickable area increased
    - Decreased line spacing in paragraph "Sale price over estimate" in "Market Signals" info popup .
    - Allow storing and retrieving local images in my collection - Brian
    - Add more local sorts + filters to my collection - Brian
    - Unify look for follow and following buttons
    - Fix artwork grid padding on the artists' artwork screen - ole
    - Support filtering artworks by multiple predefined sizes - dimatretyak
    - add artist name filter in mycollection - pavlos
    - Add prefetching to all home screen modules - ole

  - Dev changes:
    - Update home placeholder's order
    - Limit Algolia search indexes exposed in app to a specific supported list - dimatretyak
    - send better formatted errors to sentry - mounir
    - Fix the feature flag biweekly check - Brian
    - fix markdown rendering issue that caused app to crash - gkartalis
    - stop RangeError from happening when debugging.
    - delete a buuuuuunch of native ios code - pavlos
    - refactor screenreaderTracking hook to not use state - gkartalis, pvinis
    - updated tests and removed some ts-expect-error - gkartalis
    - moved `setupSentry` in `index.ios.js` so it doesnt get called again - pavlos
    - removed a deprecated `enableOutOfMemoryTracking` from sentry init - pavlos
    - added an `Open RN Dev Menu` menu item in the admin menu, so we can open the RN dev menu on a device! - pavlos
    - reworked the `useScreenReaderTracking` to not use state - pavlos

<!-- DO NOT CHANGE -->

## Released Changes
