from django.db import models
from .serializers import CourseSerializer, ChapterSerializer, ProgressSerializer, RegisterSerializer
from .models import Course, Chapter, Progress
from rest_framework import viewsets, generics
from django.contrib.auth.models import User

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all() # What does this line do? It retrieves all Course objects from the database.
    serializer_class = CourseSerializer # What does this line do? It specifies the serializer to be used for converting Course instances to and from JSON.

class ChapterViewSet(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class ProgressViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer




    