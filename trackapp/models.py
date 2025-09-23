from django.db import models
from django.contrib.auth.models import User

class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self): 
        return self.name
    
class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, null=True) 

    def __str__(self):
        return self.title
    
class Progress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"({self.user.username} - completed {self.chapter.title})"
    

    


    
    





