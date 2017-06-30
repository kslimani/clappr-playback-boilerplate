# clappr-playback-boilerplate

A simple [Clappr player](https://github.com/clappr/clappr) Playback external plugin boilerplate project.

Install dependencies

```shell
$ yarn install
```

Run dev server :

```shell
$ yarn run start
```

Demo page is available at http://localhost:8080

Compile "dist" playback plugin :

```shell
$ yarn run dist
```

## Customizations

Adjusts to your needs :

* `main` field value in [package.json](https://github.com/kslimani/clappr-playback-boilerplate/blob/master/package.json#L2) file
* `pluginName` and `pluginClass` values in [Webpack configuration](https://github.com/kslimani/clappr-playback-boilerplate/blob/master/webpack.config.js#L7) file
* the class name and `name` return value in [main source](https://github.com/kslimani/clappr-playback-boilerplate/blob/master/src/index.js#L4) file
