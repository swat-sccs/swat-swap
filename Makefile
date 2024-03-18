.PHONY: nuke
.PHONY: install
.PHONY: reinstall

DC := docker compose

# installs all package dependencies
install:
	npm install

# removes all node_modules folders recursively
nuke:
	find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

# brings up all services
up:
	$(DC) up 

# takes down all running containers
down:
	$(DC) down

# pulls the latest images for all services
update:
	$(DC) pull

# migrates the prisma schema to the database
migrate:
	$(DC) exec swatswap /bin/bash -c "npx prisma generate && npx prisma migrate dev"

# removes all packages and reinstalls them
reinstall: nuke install

# brings up all services and migrates the prisma schema onto the database
dev: down update up migrate

devFresh: down nuke install update up migrate
