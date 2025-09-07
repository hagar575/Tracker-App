from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'courses', views.CourseViewSet)
router.register(r'chapters', views.ChapterViewSet)  
router.register(r'progress', views.ProgressViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]




