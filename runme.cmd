echo "download code from git hub"
git init
git pull https://github.com/ionasec/FreeHealth_FirstApp.git

echo "install and start frontend server"
cd frontend
call npm install -y
start ng serve --open

echo "start mongo database
start c:\\Program Files\\MongoDB\\Server\\4.2\\bin\\monogod

echo "install and start backend server"
cd ../backend
call npm install -y
start nodemon server.js

