.PHONY: tests validate coverage

tests:
	./node_modules/.bin/jest . --coverage


validate:
	./node_modules/.bin/eslint . --ext .js


coverage:
	node_modules/.bin/codecov
