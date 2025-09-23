from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()

router.register(r'courses', views.CourseViewSet)
router.register(r'chapters', views.ChapterViewSet)  
router.register(r'progress', views.ProgressViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/register/', views.RegisterView.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]




