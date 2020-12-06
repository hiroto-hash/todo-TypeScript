#!/bin/sh
docker exec dc_mysql bash -c "chmod 0775 docker-entrypoint-initdb.d/init-db.sh"
docker exec dc_mysql bash -c "./docker-entrypoint-initdb.d/init-db.sh"