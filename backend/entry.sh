#!/bin/bash

./wait-for-it.sh db:5432 -- echo "Database is up"

echo "Applying migrations..."
python manage.py migrate

echo "Starting the server..."
python manage.py runserver 0.0.0.0:8000