#!/bin/bash

docker-compose run swatswap-db bash -c "psql -h swatswap-db -U root -d swatswap_db"
