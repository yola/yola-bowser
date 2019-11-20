# yola-bowser

The library that helps to detect platform/OS/browser and other useful information available from `window.navigator.userAgent`. It relies on the [Bowser] (https://github.com/lancedikson/bowser) version 2+, and provides a custom API which based on boolean flags.

## `yola-bowser` usage:

1. Import the library:
2. Start using self-descriptive boolean flags to perform needed checks.

```javascript
import yolaBowser from 'yola-bowser';

const isSafari = yolaBowser.safari;
const isLinux = yolaBowser.linux;
const isMobile = yolaBowser.mobile;

```
## Available Flags

### Browser flags:
* `chrome`
* `edge`
* `firefox`
* `ie`
* `opera`
* `safari`

### OS flags:
* `android`
* `ios`
* `iPadOS` - Separate flag for the new iPad OS.
* `linux`
* `macOS` - Desktop Mac, but not the new iPad OS.
* `windows`

### Platform flags:
* `mobile` - All detected mobile OSes, unless it's a tablet.
* `tablet` - Tablet device either on mobile OS, or the new iPad OS.
* `desktop` - Desktop OSes, but not the new iPad OS.

## `yola-bowser` development:

1. Run `npm install` and `npm run dev:watch` to start a local server with the sandbox.
2. New browser tab will be opened automatically on `http://localhost:9000/`.
3. There you can see the list of all flags values provided by the `yola-bowser` according to your environment.
