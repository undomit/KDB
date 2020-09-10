Welcome to my **Knowledge DataBase Management** App!

This project's aim is to help businesses centralize, organize
and use their Know-How on a web-based platform

Users will be able to add, modify and remove topics, implement pairs of issues and solutions.

**FRONT-END REACT APP:**

To run:

1. Install Node.JS *https://nodejs.org/en/*
2. Install the required node packages, by running the command *npm install*  using the a terminal in the root folder of the app
3. Run the webserver using *npm start*

**BACK-END DJANGO REST API:**

1. Install Python3 *https://www.python.org/downloads/*
2. Go to /kdb-be and run *pip install -r requirements.txt*
2. Run kdb-be/kdb/py manage.py runserver
3. Access localhost:8000/categories/   (list)    
          localhost:8000/categories/x  (detailed view)
          localhost:8000/topics/   (list)
          localhost:8000/topics/x  (detailed view)
          localhost:8000/topics?category=pk (filter topics by category)
