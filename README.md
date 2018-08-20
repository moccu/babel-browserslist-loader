# babel-browserslist-loader

[![Build Status](https://travis-ci.org/moccu/babel-browserslist-loader.svg?branch=master)](https://travis-ci.org/moccu/babel-browserslist-loader)
[![Coverage Status on Codecov](https://codecov.io/gh/moccu/babel-browserslist-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/moccu/babel-browserslist-loader)

The webpack babel-loader with support for browsers defined in .browserslistrc
for babel 6.x.

According to the missing support of a shareable browserslist config in
babel-preset-env ([issue 108](https://github.com/babel/babel-preset-env/issues/108))
and the
[comment of skleeschulte](https://github.com/babel/babel-preset-env/issues/108#issuecomment-302881919),
this functions provides a [babel-loader](https://github.com/babel/babel-loader)
configuration including the target browsers configuration from the browserslistrc
file.

## Installation

```
$ npm install --save-dev @moccu/babel-browserslist-loader
```

## Usage

```
const babelloader = require('@moccu/babel-browserslist-loader');


module.exports = {

	// webpack config...

	rules: [
		{
			test: /\.js$/
			use: [
				babelloader()
			]
		}
	]
};
```

## Contribute

* Run tests using `npm test`
* Set new version in [package.json](https://github.com/moccu/babel-browserslist-loader/blob/master/package.json)
* Publish new version on npm using `npm publish --access=public`
* Add github release and tag including release notes

## License

[MIT](./LICENSE)
