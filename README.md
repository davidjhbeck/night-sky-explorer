# Night Sky Explorer

This project is a static HTML/CSS/JS app scaffolded for iPhone packaging with Capacitor.

## Files

- `index.html`
- `styles.css`
- `app.js`
- `capacitor.config.json`
- `package.json`

## Turn It Into an iPhone App

1. Install Node.js on your Mac if it is not already installed.
2. In this folder, run:

```bash
npm install
npx cap add ios
npx cap sync
npx cap open ios
```

3. Xcode will open the iOS project.
4. Choose your iPhone as the run target.
5. Build and run from Xcode.

## Notes

- The web app is configured directly from the project root with `webDir` set to `.`.
- If you later move the app into a `dist/` or `www/` folder, update `capacitor.config.json`.
- For App Store submission, you will likely want to add real app icons and a splash screen.

## Publish With GitHub Pages

This project is already set up to publish as a static site from the repository root.

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open the repository settings.
4. Go to `Pages`.
5. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
6. Save the settings and wait for GitHub Pages to publish.

Your site URL will look like:

```text
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

Then on your iPhone:

1. Open the GitHub Pages URL in Safari.
2. Tap the Share button.
3. Choose `Add to Home Screen`.

## Optional Git Commands

If you want to publish from Terminal after creating the repository on GitHub:

```bash
git init
git add .
git commit -m "Initial Night Sky Explorer"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```
