#!/usr/bin/env bash


echo "Updating Database Schema..."
migrate() {
  docker-compose exec swatswap npx prisma migrate dev --name "$1"
}

# Run the migrate function with the provided arguments
migrate "$@"
