# Django Student Progress Tracker

A backend API for tracking students' learning progress that is built with Django & Django REST framework

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
pip install django-cors-headers
```

5. Run database migrations
```
python manage.py makemigrations
```
```
python manage.py migrate
```

6. Run the server:
```
python manage.py runserver
```

## Frontend Setup
1. Navigate to the frontend directory
```
cd mytracker
```

2. Install dependencies
```
npm install
```

3. Start the React app
```
npm start
```
