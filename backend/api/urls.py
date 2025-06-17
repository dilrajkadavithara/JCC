# JCC/backend/api/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, LeadCreateAPIView

# Create a router for our ViewSets
router = DefaultRouter()
router.register(r'services', ServiceViewSet, basename='service') # Register ServiceViewSet at /services

urlpatterns = [
    # URLs for the ServiceViewSet (list and retrieve operations)
    path('', include(router.urls)),
    # URL for creating Leads (form submissions)
    path('leads/', LeadCreateAPIView.as_view(), name='lead-create'),
]