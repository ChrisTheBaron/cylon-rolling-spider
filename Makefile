BIN := ./node_modules/.bin
TEST_FILES := spec/helper.js $(shell find spec/lib -type f -name "*.js")

VERSION := $(shell node -e "console.log(require('./package.json').version)")

.PHONY: test bdd release

test:
	@$(BIN)/mocha -r cylon --colors -R dot $(TEST_FILES)

bdd:
	@$(BIN)/mocha -r cylon --colors -R spec $(TEST_FILES)

release:
	@git push origin master
	@git checkout release ; git merge master ; git push ; git checkout master
	@git tag -m "$(VERSION)" v$(VERSION)
	@git push --tags
	@npm publish ./
