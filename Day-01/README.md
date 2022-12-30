# Day 01 - Namaste React 🙏🏻

## What is Emmet?

A text editor extension that is now inbuilt to VSCode that makes developer job easy in crafting HTML skeletons fast.

Usage like `#root>.container*2` will result in the following:

```
  <div id="root">
    <div class="container">
    </div>
    <div class="container">
    </div>
  </div>
```

## Difference between library and framework?

In JS, `library` is a light-weight piece of code that is developed by an external development team/author serving the purpose to make your UI development journey easy. Example: React (by Facebook)

`Framework` is a set of pre-build tools which is opiniated to work in a certain defined format when combined together will result in a full-fledged web app. Example: Angular (by Google)

## What is CDN? Why do we use it?

Content delivery network aka CDN is a fast delivery service serving with high availability.

Libraries like tailwind, react, bootstrap famously use these to delivery their minified version of library to have quick development setup without any extra installation.

## Why is React known as React?

React was developed for Facebook that have constantly changing data. React is “View” in MVC as the user clicks around and changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form.

> Source: Quora (not my words)

## What is crossorigin in `<script>` tag?

While requesting for a resource hosted self/external from client machine whether we want to make that request identifiable and attach user details or not is decided by crossorigin.

We can set two type of values `anonymous` and `use-credentials`

`anonymous` - Makes a simple request without any extra data being set. None of the identifying information is sent

`use-credentials` - Carries extra information from your browser inform of cookies, session data, etc are sent

## What is diference between React and ReactDOM?

React package holds source for components, state, props and all the code that is react `React.createElement()`

The react-dom package as the name implies is the glue between React and the DOM `ReactDOM.render()`

## What is difference between react.development.js and react.production.js files via CDN?

The versions of `development` are not suitable for production. Often can be large in size to load via CDN.

`production` is minified and optimized versions of React.

## What is async and defer?

<img src="./async defer.svg" />

<img src="./async defer visual.svg" />
