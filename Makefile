UID := $(shell id -u) 
GID := $(shell id -) 
PWD := $(shell pwd)

###################################
# DEVELOPEMENT
###################################
build:
	docker build --build-arg USER_UID=$(UID) -t angular-container -f .docker/Dockerfile .

install:
	pnpm install

outdated:
	pnpm outdated

start:
	pnpm run start

###################################
# QUALITY CONTROL
###################################
prettier:
	pnpm run prettier

lint:
	pnpm run lint

lint/fix:
	pnpm run lint-fix

test:
	docker run --rm -v $(PWD):/app angular-container pnpm run test
