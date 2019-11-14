# yola-bowser

The library that helps to detect platform/OS/browser and other useful information available from `window.navigator.userAgent`. It relies on the Bowser version 2+, and provides a custom API which based on boolean flags.

## `yola-bowser` usage:

1. Import the library:
2. Start using self-descriptive boolean flags to perform needed checks.

```javascript
import yolaBowser from 'yola-bowser';

const isMobile = yolaBowser.mobile;
const isLinux = yolaBowser.linux;
const isSafari = yolaBowser.safari;

```

Available platform related flags: `tablet`, `mobile`, `desktop`,
Available OS related flags: `android`, `ios`, `iPadOS`, `linux`, `macOS`, `windows`.
Available browser related flags: `chrome`, `firefox`, `edge`, `ie`, `opera`, `safari`.

## `yola-bowser` development:

1. Run `npm install` and `npm run dev:watch` to start a local server with the sandbox.
2. New browser tab will be opened automatically on `http://localhost:9000/`.
3. There you can see the list of all flags values provided by the `yola-bowser` according to your environment.
