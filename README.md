# Namaste_React
1.What is Emmet?
Emmet is free-addon to our text editor that allows us to type shorcut names and that can be expanded to full pieces of code.
Example: html:5

2.Difference between a Library and Framework?
The main difference between Library and a Framwork is "Inversion of Control(IoC)." 
When we are using a Library our code call the library where in caseof Framework, Our code is called by the framework.

3.What is CDN? Why do we use it?
CDN stands for Cotent Delivery Network and is geographically distributed group of servers that caches content close to end users. We use it because it allows quick transfer of assets over the internet like Html, js , stylesheets, images etc..

4.Why is React known as React?
React is known as React because of its ability to react to changes in data.

5.What is crossorigin in script tag?
When we are making a cross-origin request , crossorigin (defaults to crossorigin="anonymous") attribute will not send any important data like user-credentials to the src link.

6.What is diference between React and ReactDOM
React is used to build userInterfaces , whereas ReactDOM is used to render React Components to DOM.

7.What is difference between react.development.js and react.production.js files via CDN?
react.development.js contains code for developement where as react.production.js is a minified and optimised js code used for production.

8.What is async and defer?
async - using async keyword in script tag fetches the scripts in parallel to the parsing of html. Once the scripts are fetched, it stops parsing and immediately excutes scripts and then continues parsing.
defer - using defer keyword in script tag fetches the scripts in parallel to the parsing of html. but executes the scripts only after parsing is completed.

9.What is `NPM`?
NPM is package manager for Node javascript platform . By using NPM, we can install the dependency and devDependency packages that are required for our project.

10.What is `Parcel/Webpack`? Why do we need it?
Parcel/Webpack are module bundlers that are used to minify, clean our codes. Parcel/Webpack also provides different features for our development like live server, hot reloading , file watching, etc..

11.What is `.parcel-cache`?
Parcel catchess everything it builds to disk. if you restart the dev server, Parcel only rebuilds files that have changed since the last time it ran. parcel cahche is stored in `.parcel-cache`.

12.What is `npx`?
npx is a node package runner which is used to execute the packages. It also helps to execute packages from internet without even installing them in local.

13.What is difference between `dependencies` vs `devDependencies`
`dependencies` are the packages that are required for our application in production. `devDependencies` are the packages that are needed for local development.

14.What is Tree Shaking?
Tree Shaking is commonly used term in javascript context for dead code elimination. It depends on keywords like import export and identifies which is code exported and imported and removes the unwanted code while bundling.

15.What is Hot Module Replacement?
Hot Module Replacement is mechanism which replaces old modules with new one's without the need of refreshing whole page.

16.List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words?
Dev Server, File Watchers, Bundling, Image Optimization and Compression, https on dev, Parcel-Cache. 
Dev Server - Parcel provides us with development server out of the box which by default is `http://localhost:1234`.
File Watchers - Parcel tracks our file changes through fast file watcher algorithm written C++ that integrates with low level file watching of our OS. it watches all the files including the files in node_modules. whenever a file changes it rebuilds accordingly.
https on dev - parcel gives us the way to use https on our dev server. when we run command `npx parcel index.html --https`. it starts a server that is running with `https://localhost:1234`.

17.What is `.gitignore`? What should we add and not add into it?
.gitignore is a file that maintains the folder names that are not needed to push to git. 
We need to add automatically generated folders while installing and while executing. We don't need add main files like package.json package-lock.json.

18.What is the difference between `package.json` and `package-lock.json`?
package.json is a versioning file which is needed to install multiple packages in your project. it provides metadata about your app. where as package-lock.json locks the exact version that is used as a dependency and transitive dependencies for our Project.

19.Why should I not modify `package-lock.json`?
package-lock.json provides the exact version that we are using in our project. if you modify anything in package-lock.json it may not install the exact version that is required for our application and the application will break.

20.What is `node_modules` ? Is it a good idea to push that on git?
node_modules is folder that contains all the modules that we are using in our project. It i not a good idea to push node_modules git beacause it occupies more space and this installed modules is already provided by package-lock.json. so we can push package-lock.json to git that one can pull it and install in their system using simple command `npm install`.

21.What is the `dist` folder?
dist folder is a final target folder where our minified and optimised code will be there.

22.What is `browserlists`?
`browserlists` is a configuration by we can tell on which browsers and on versions our app should definetely work.