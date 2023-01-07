# Day 02 - Namaste React 🙏🏻

> 📕 Class notes are available [here](https://github.com/jwala-anirudh/namaste-react/tree/main/Day-02/00-Igniting-our-App)

## Theory Assignment:

### Q) What is `NPM`?

Projects that run in NodeJS runtime require externally developed packaged that help as utility, framework, libraries etc to be included. The process of it is called as Dependency management, for nodejs we have a repository called NPM.3

No official abbreviation, losely called as Node package management

### Q) What is `Parcel/Webpack`? Why do we need it?

Parcel and webpack are bundlers that help you combine your project source code into production ready package. This package has minified version of your code with performant JS, minified CSS.

To reach this stage, they use no of algorithms to make it what they are. Webpack is widely used in industry ready applications. But Parcel is no less, still has similar features and is very good for indie devs to have zero config out-of-the-box.

### Q) What is `.parcel-cache`?

Parcel bundler time in first and upcoming subsequent builds is fast due to caching local into this folder. It stores the information about the project so that re-parsing from scratch can be avoided and fast development is made possible.

### Q) What is `npx`?

npm executable is called as `npx`, this is a command recognized by the nodejs environment. Also equivalent to "npm run".

### Q) What is the difference between `dependencies` v/s `devDependencies`?

NPM dependencies can be added as utility for the project that are used to work with are `dependencies` that ship to the client machine (browser) and `devDependencies` that are used only for development and are not shipped.

### Q) What is Tree Shaking?

Tree shaking is a common concept used in JavaScript to eliminate dead-code from the project that is unused and unnecessary for the final production build.

### Q) What is Hot Module Replacement?

HMR - Hot Module Replacement is a concept that allows instant reload of the webpage for the code changes that are made and saved. There is no requirement of manual refresh, it comes as part of your bundlers like Webpack and Parcel. Makes development journey easy.

An algorithm called File Watcher that is writtern in C++ is used to acheive this level of hot reload.

### Q) List down your favourite 5 superpowers of Parcel and describe any 3 of them?

### Q) What is `.gitignore`? What should we add and what not to add into it?

### Q) What is the difference between `package.json` and `package-lock.json`

### Q) Why should I not modify `package-lock.json`?

### Q) What is `node_modules`? Is it a good idea to push that on git?

### Q) What is the `dist` folder?

### Q) What is the `browserlists`?

### Q) Bundlers of js: vite, webpack, parcel

### Q) What is ^ caret and ~ tilda notation in `package.json`?

### Q) Script types in HTML
