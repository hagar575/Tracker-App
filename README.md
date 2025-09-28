# Django Student Progress Tracker

A backend API for tracking students' learning progress that is built with Django & Django REST framework

## About 
A Django project to be able to keep track of students' processes through the API endpoints created with Django REST Framework 

## Backend Setup
1. Activate virtual environment
```
\venv\Scripts\activate
```

2. Navigate to the backend directory
```
cd Tracker
```

3. Install dependencies: 
``` 
pip install djangorestframework 
```
```
pip install djangorestframework-simplejwt                                                                     
```

4. Run database migrations
```
python manage.py makemigrations
```
```
python manage.py migrate
```

5. Run the server:
```
python manage.py runserver
```
