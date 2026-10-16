# My Mood & Stress Diary — web app

This folder is a complete installable web app (PWA). It works offline, installs on Android like a normal app, and keeps every entry on the user's phone. Nothing is sent to any server.

## What's inside

| File | What it does |
|---|---|
| `index.html` | The diary itself |
| `manifest.json` | App name, colours and icons, so Android can install it |
| `sw.js` | Makes the app work offline |
| `privacy.html` | Privacy policy page (also needed if you later publish on the Play Store) |
| `logo.png`, `icons/` | Your logo and the app icons |
| `fonts/` | Lato and Cormorant Garamond, bundled so nothing loads from outside |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Put it online with GitHub Pages (free, about 10 minutes)

1. Go to github.com and create a free account.
2. Click **+** (top right) → **New repository**. Name it `mood-diary`, choose **Public**, and click **Create repository**.
3. On the next page click **uploading an existing file**. Drag in **everything inside this folder**, not the folder itself. `index.html` must sit at the top level. Click **Commit changes**.
   - Hidden file `.nojekyll`: if your computer hides it, that's fine. The app still works without it.
4. Open **Settings → Pages**. Under *Branch*, choose **main** and **/ (root)**, then **Save**.
5. Wait a minute or two. Your link appears at the top of that page:
   `https://YOUR-USERNAME.github.io/mood-diary/`

To use your own website instead, upload the same files to a folder such as `psychiatristathul.com/diary/`. The site must use **https**.

## Install it on an Android phone

1. Open the link in **Chrome**.
2. Tap the **Install** button shown under the privacy note, or open the **⋮** menu → **Install app** (older Chrome: **Add to Home screen**).
3. The diary now opens from the app drawer, full screen, with or without internet.

On an iPhone: open the link in Safari → Share → **Add to Home Screen**.

## Making changes later

1. Edit the file and upload it to the repository again, replacing the old one.
2. Open `sw.js` and change `mood-diary-v1` to `mood-diary-v2` (then v3, and so on), and upload it too. This tells installed phones to fetch the new version.

Entries are never touched by an update.

## Things to tell patients

- Entries live only on their phone. Uninstalling the app or clearing Chrome's data for the site erases them.
- **Back up all entries** saves one file (to Drive, WhatsApp or Downloads). **Restore from backup** loads it on a new phone. Restoring never overwrites days already on the phone.
- **Share month summary** opens WhatsApp, email and other apps directly. **Copy summary** and **Save as a file** also work.
- The helpline cards can be tapped to call.

## Next step: Play Store (optional)

This same folder can be wrapped into a Play Store app with Google's Bubblewrap tool, or with Capacitor. `privacy.html` already covers the privacy policy the Play Console asks for.
