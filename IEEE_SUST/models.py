from django.db import models

# Create your models here.

class Events(models.Model):
    subject = models.CharField(max_length=255) # title 
    brief = models.CharField(max_length=5000) # description of event
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    # image = # event image
    location = models.CharField(max_length=255)
    from_link = models.CharField(max_length=400)