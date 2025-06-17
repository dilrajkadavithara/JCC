# JCC/backend/api/views.py

from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from .models import Service, Lead
from .serializers import ServiceSerializer, LeadSerializer

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A simple ViewSet for viewing list of services.
    Uses ReadOnlyModelViewSet as services are managed via admin,
    not directly created/updated/deleted via API by frontend users.
    """
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class LeadCreateAPIView(generics.CreateAPIView):
    """
    API view for creating new Lead instances from the 'Get a Call' form.
    Only allows POST requests.
    """
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

    def create(self, request, *args, **kwargs):
        # You can add custom logic here before saving, e.g., validation, email notification
        return super().create(request, *args, **kwargs)