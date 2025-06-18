# JCC/backend/josecarcare_backend/urls.py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings # Import settings
from django.conf.urls.static import static # Import static helper

urlpatterns = [
    path('admin/', admin.site.urls),
    # Include your API app's URLs under the 'api/' path
    path('api/', include('api.urls')), # <-- ADD THIS LINE
]

# Serve media files during development
# IMPORTANT: This is for development only and should be handled by NGINX in production.
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) # NEW: Serving STATIC_URL
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
