# JCC/backend/api/models.py

from django.db import models

class Service(models.Model):
    """
    Model to store information about a car detailing service.
    Content for this model will be managed via the Django Admin.
    """
    name = models.CharField(max_length=200, help_text="Name of the service (e.g., 'Premium Exterior Detail')")
    short_description = models.TextField(help_text="A brief description of what the service includes.")
    image = models.ImageField(upload_to='services/', help_text="Image representing the service.")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Service"
        verbose_name_plural = "Services"
        ordering = ['name'] # Order services alphabetically by name

    def __str__(self):
        return self.name

class Lead(models.Model):
    """
    Model to store leads from the 'Get a Call' form in the Hero section.
    """
    name = models.CharField(max_length=100, help_text="Name of the customer interested in a call.")
    phone_number = models.CharField(max_length=20, help_text="Phone number of the customer.")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Lead"
        verbose_name_plural = "Leads"
        ordering = ['-created_at'] # Order leads by most recent first

    def __str__(self):
        return f"Lead from {self.name} ({self.phone_number})"