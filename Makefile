###
# node-api-model Makefile
###

include node_modules/common-makefiles/node.make

HINT_DIR = src/

JSDOX_INPUT = src/

test: jshint mocha

docs: jsdox

.PHONY: test
