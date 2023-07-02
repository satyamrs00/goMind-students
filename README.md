## Students list application

This is a simple application to manage a list of students. The backend is written in Python and uses the Flask framework. The frontend is developed with ReactJS.

### Links

- [Backend deployment](https://gomind-students-production.up.railway.app/)
- [Frontend deployment](https://master--students-listt.netlify.app/)
- [Postman collection](https://elements.getpostman.com/redirect?entityId=23277225-0d00d04b-2938-40e0-a21f-8e230d9ab136&entityType=collection)
  

### How to run the application

#### Backend

1. Clone the repository
2. Go to the backend directory with `cd backend`
3. Install pipenv with `pip install pipenv`
4. Activate the virtual environment with `pipenv shell`
5. Install the dependencies with `pipenv install`
6. Acquire a mongodb instance and set the `MONGO_URI` environment variable
7. Run the application with `python app.py`

#### Frontend

1. Clone the repository
2. Go to the frontend directory with `cd students-frontend`
3. Install the dependencies with `npm install`
4. Set the `REACT_APP_API_URL` environment variable to the backend url (e.g. `http://localhost:5000`)
5. Run the application with `npm start`


### API Documentation

- Get all students: `GET /api/students`
- Create a student: `POST /api/students` with body:
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "example@example.com",
    "college": "College of Engineering",
    "department": "Computer Science and Engineering"
  }
- Get all colleges: `GET /api/colleges`
- Get all departments: `GET /api/departments`