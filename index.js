const
	browserslist = require('browserslist'),
	deepExtend = require('deep-extend'),
	rc = require('rc')
;


function loader(extra = {}) {
	const
		defaults = {
			loader: 'babel-loader',
			options: {
				babelrc: false
			}
		},
		options = rc('babel', {}, () => undefined),
		browsers = browserslist.findConfig('.')
	;

	// Choose environment:
	let env = 'production';
	if (typeof process.env.BROWSERSLIST_ENV === 'string') {
		env = process.env.BROWSERSLIST_ENV;
	} else if (typeof process.env.NODE_ENV === 'string') {
		env = process.env.NODE_ENV;
	}

	// Remove default props from rc
	delete(options._);
	delete(options.config);
	delete(options.configs);

	// Transform and merge browsers into presets:
	options.presets = options.presets.map((preset) => {
		if (typeof preset === 'string') {
			preset = [preset, {}];
		}

		if (preset.length < 2) {
			preset.push({});
		}

		preset[1] = deepExtend({
			targets: {
				browsers: browsers[env] || browsers.defaults
			}
		}, preset[1]);

		return preset;
	});

	return deepExtend(defaults, {
		options: deepExtend(options, extra)
	});
}


module.exports = loader;
