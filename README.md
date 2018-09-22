# flaffr-web
Flaffr.com web client made by _Michał Prusak_ and _Szymon Woźniak_.

### How to build
First, install all the required dependencies by invoking the following command.
```
$ npm install
```
Then you can proceed to building the application.
```
$ npm start
```
The build output will be saved to the `dist/` directory as `flaffr.bundle.js`.

Alternatively, you can start the webpack dev server to see the changes live:
```
$ npm run start:dev
```

**NOTE:** The React router will not work when the `index.html` is accessed via the `file://` protocol. Consider yourself
 warned.

### Documentation
We do not have any documentation for the app, because writing such would be pointless.
Instead, we have written a small reference for the Flaffr API, which can be found under the `docs/` directory.
