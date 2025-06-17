# JCC/backend/api/admin.py

from django.contrib import admin
from .models import Service, Lead # Import your Service and Lead models

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    """
    Admin configuration for the Service model.
    """
    list_display = ('name', 'created_at', 'updated_at') # Fields to display in the list view
    search_fields = ('name', 'short_description') # Fields to search by
    list_filter = ('created_at',) # Fields to filter by

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    """
    Admin configuration for the Lead model.
    """
    list_display = ('name', 'phone_number', 'created_at') # Fields to display
    search_fields = ('name', 'phone_number') # Fields to search by
    list_filter = ('created_at',) # Fields to filter by
    readonly_fields = ('created_at',) # Make created_at read-only in admin form