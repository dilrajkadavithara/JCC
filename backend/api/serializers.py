# JCC/backend/api/serializers.py

from rest_framework import serializers
from .models import Service, Lead

class ServiceSerializer(serializers.ModelSerializer):
    """
    Serializer for the Service model.
    Converts Service model instances to JSON and vice-versa.
    """
    image = serializers.ImageField(use_url=True) # Ensure image URL is provided in response

    class Meta:
        model = Service
        fields = ['id', 'name', 'short_description', 'image', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at'] # Frontend does not set these

class LeadSerializer(serializers.ModelSerializer):
    """
    Serializer for the Lead model.
    Handles data for the 'Get a Call' form.
    """
    class Meta:
        model = Lead
        fields = ['id', 'name', 'phone_number', 'created_at']
        read_only_fields = ['created_at'] # Frontend does not set this