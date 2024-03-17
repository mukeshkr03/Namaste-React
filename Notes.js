// package.json is a configuration for npm
// Bundler - compreses our code so that it could be pushed to production
// There are 2 types of dependencies we can install in our app - 
//     1. dev dependency - dependency required in development phase.
//     2. normal dependency - dependency used in production
// parcel - dev dependency (bundler)
// ^ in parcel in package.json - indicates that the parcel dependency will get auto installed in future
// if minor upgradation is done to it.
// ~ for major auto installation.
// ^ is better than ~
// package.lock.json - keeps track of exact version (eg: 2.2.8) and package.json can have ^ on it
// package.lock.json - keeps track of exact version of all the dependencies.
// node_modules - contains exact data(code) of installed dependencies
// transitive dependencies
// if i have package.lock.json and package.json I can regenerate my node_modules
// npm i

// npx - executing a pckage
// CDN is not a preferred way to introduce react in our app
// alternative - npm i react

// # parcel
// - Dev Build
// - Local server
// - HMR - Hot module replacement
// - Faster build bec of caching 
// - Image Optimization
// - Minification
// - Bundling
// - Compressing
// - code splitting
// - Differential Bundling - support older browser
// - Tree shaking - removes unused codes
// dist folder - contains production ready code