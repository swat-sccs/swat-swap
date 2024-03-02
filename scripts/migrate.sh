#!/bin/bash

migrate() {
  docker-compose exec swatswap npx prisma migrate dev --name "$1"
}

# Run the migrate function with the provided arguments
migrate "$@"
