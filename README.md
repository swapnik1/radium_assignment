# Info

This project contains code for both the backend and the front end. I have used django with djangorestframework for my backend, PostgresDB for my SQL Database, and React js for my front end

# How to run and test

Make sure you have the latest version of Docker installed
git clone the repo
cd into the repo
run:`docker-compose up --build`
The db username and password is in the repo itself so no need to create any .env files for this project

## To run the tests
`docker exec [backend_container_name] python manage.py test`

## To test the front end
In your browser go to http://localhost:3000
- This step might take some time(~90 seconds) to load if the frontend server has not started yet. You can always manually exit/stop the frontend server and run `npm run start` from the `frontend` directory
Use the interface to test out CRUDL actions
