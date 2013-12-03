include node_modules/common-makefiles/node.make

HINT_DIR = src/

test: jshint mocha

.PHONY: test
