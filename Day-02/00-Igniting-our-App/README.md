# Notes from class

1. Always ship `package-lock.json` to git, don't add in ignore
2. It holds the exact version that is installed on the machine
3. It has a hash, so integrity is maintained
4. Never touch node_modules folder
5. To ignite parcel: `npx parcel index.html` is the command for local
6. Parcel does auto-reload, bundling of assets & code
7. `import ReactDOM from "react-dom"` is not a valid import any more
   In React v18+ we need to update to "react-dom/client"

# Parcel is a Beast

1. Comes with inbuilt HMR (Hot Module Replacement)
2. File Watcher algorithm is used to check for changes in code (writtern in C++)
3. `.parcel-cache` is a folder created by Parcel to keep track of changes within it's memory
4. For production build `npx parcel build index.html` and keep them inside `dist` folder
5. No need to mention "main" declaration in package.json when you are using parcel
6. `dist/` folder is created, here we have
7. Some top features:
   - Bundle of index.html, css & js always 3 files
   - All console.logs are removed; code is cleaned for prod
   - Minification of js
   - Fast build and compile time for local and production
   - Image optimization on it's size and media can be large
   - Caching while development; subsequent build times are small
   - Compatible with older versions of browser (with pollyfills)
   - HTTPS on dev is possible `npx parcel index.html --https`
   - Parcel allocates PORT number for your application to run
   - We should keep .parcel-cache in `.gitignore`
   - Uses Consistent Hashing algorithm to do all the bundling
   - Zero configuration
8. NPM package-lock.json takes care of transitive dependencies (A -> B -> C)
   - If A is dependent of B
   - Then, A is transitive dependent on C

Read more: https://parceljs.org/features/development/

## Browser List

List of compatible browsers you want the app to run and make it compatible

- last 2 versions
- last 2 Chrome versions
- cover 99%
