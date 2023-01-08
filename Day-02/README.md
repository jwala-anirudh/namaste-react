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

- Tree shaking: Removes unwanted code
- Fast build and compile time for local and production
- Image optimization on it's size and media can be large
- Caching while development; subsequent build times are small
- Compatible with older versions of browser (with pollyfills)

### Q) What is `.gitignore`? What should we add and what not to add into it?

A file that allows you to delist files from adding to your git-tree from commiting. Files that are necessary to be present for your project to build and work the core essential code must not be delisted, else you project will not work. Folders such as parcel-cache, dist, node_modules are not necessary to be commited since they can be regenerated again on the deployment server. But files such as package.json and package-lock.json are compulsary to be pushed so we should not delist them.

### Q) What is the difference between `package.json` and `package-lock.json`

The project dependencies, devDependencies, meta data of the project, start, build, test, lint scripts are mentioned inside `package.json` and this is very essential for your project to work

The exact snapshot version, SHA integrity, link to the package tar, transitive dependent packages of the installed dependencies are furthur listed down in the `package-lock.json` file.

### Q) Why should I not modify `package-lock.json`?

Modification of it will lead to mis-behaviour of your project working, since core functional library, framework, utilities that you installed for the project to run may not behave as your expected. `package-lock.json` file will furthur drill down to have more transitive dependent packages which are again dependent on further versions. So changing this version is not encouraged.

### Q) What is `node_modules`? Is it a good idea to push that on git?

The folder `node_modules` is where the installed dependencies from npmjs repository are present for the project to run. Not at all a good idea to push to git as this is a humangus folder that can be from 100s of mb to gb sometimes.

### Q) What is the `dist` folder?

Compiled version of html, css, js files is available under the `dist` folder whether it is with parcel, react or angular it comes under the same folder. It will ideally have these 3 files that are shipped into the client's browser to run your program.

### Q) What is the `browserlists`?

List of compatible browsers you want the app to run and make it compatible. We can mention such as

- last 2 versions
- last 2 Chrome versions
- cover 99%

### Q) Bundlers of js: vite, webpack, parcel

A bundler is a tool that combines many JavaScript files into a single production ready lodable program to browser. Bundler generates a dependency graph as it traverses your first code files. This implies that beginning with the entry point you specified, the module bundler keeps track of both your source code, dependencies & third-party dependencies. This dependency graph guarantees that all source and associated code files are kept up to date and error-free.

### Q) What is ^ caret and ~ tilda notation in `package.json`?

Dependecies installed in `package.json` follow the notation of semantic versioning. Here we have in the notation of MAJOR.MINOR.PATCH (Example: 2.12.4).

PATH - Without adding any new features, and doesn't change any existing functionality. Fixing bugs or security issues.

MINOR - When a new functionality is added without any change in existing features

MAJOR - Any time of changes that are core to the API and break previous functionality

~version It will update you to all future "patch" versions, without incrementing the minor version

^version It will update you to all future minor/patch versions, without incrementing the major version

### Q) Script types in HTML

Attribute that indicates the type of script. Can be one of the following:

- module: Treasts as JS module. Unlike classic scripts, they require use of the CORS protocol for cross-origin fetching
- empty/not mentioned: Indicates is a "classic script", containing JavaScript code
- importmap: This value indicates that the body of the element contains an import map
