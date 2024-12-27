###################################
# DEVELOPEMENT
###################################
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
	pnpm run test
