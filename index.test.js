const loader = require('./index');


describe('The babel-browserslist-loader', () => {

	const ENV = process.env;

	beforeEach(() => {
		jest.resetModules();
		process.env = {...ENV};
		delete process.env.NODE_ENV;
		delete process.env.BROWSERSLIST_ENV;
	});

	afterEach(() => {
		process.env = ENV;
	});

	it('should return full config', () => {
		const config = loader();

		expect(config).toEqual({
			loader: 'babel-loader',
			options: {
				babelrc: false,
				presets: [
					['env', {
						targets: {
							browsers: [
								'last 4 versions',
								'Chrome >= 41',
								'IE >= 10'
							]
						}
					}]
				]
			}
		});
	});

	it('should return extended config', () => {
		const config = loader({
			plugins: [
				'@babel/plugin-transform-runtime'
			]
		});

		expect(config).toEqual({
			loader: 'babel-loader',
			options: {
				babelrc: false,
				presets: [
					['env', {
						targets: {
							browsers: [
								'last 4 versions',
								'Chrome >= 41',
								'IE >= 10'
							]
						}
					}]
				],
				plugins: [
					'@babel/plugin-transform-runtime'
				]
			}
		});
	});

	it('should handle BROWSERSLIST_ENV variable', () => {
		process.env.BROWSERSLIST_ENV = 'development';

		const config = loader();

		expect(config).toEqual({
			loader: 'babel-loader',
			options: {
				babelrc: false,
				presets: [
					['env', {
						targets: {
							browsers: ['last 1 versions']
						}
					}]
				]
			}
		});
	});

	it('should handle NODE_ENV variable', () => {
		process.env.NODE_ENV = 'test';

		const config = loader();

		expect(config).toEqual({
			loader: 'babel-loader',
			options: {
				babelrc: false,
				presets: [
					['env', {
						targets: {
							browsers: ['last 42 versions']
						}
					}]
				]
			}
		});
	});

});
