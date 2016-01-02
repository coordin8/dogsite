# Static Boilerplate
My personal starter kit for all static websites I build.

The grunt build task create a production build of the site (placed in `/build`).

- Sass Compliling
- JS Importing, Concatination, and Minification
- Image Optimization
- Copying Files

Development mode will watch all js/html/sass files and run tasks accordingly. The server can be accessed at [localhost:3000](http://localhost:3000). Live Reload enabled.

## Install

```
npm install
```

## Grunt Commands
### Production Build & Watch
```
grunt build && grunt dev
```

### Production Build

```
grunt build
``` 

### Development Mode
```
grunt dev
```


