from django.db import models

# Create your models here.

class Events(models.Model):
    title = models.CharField(max_length=30,default=" ") # title
    mini_description = models.CharField(max_length=100,default=" ") # mini description for show home screen
    show_photo=models.CharField(max_length=200,default=" ")# image as url
    description = models.CharField(max_length=1000,default=" ")
    event_year = models.CharField(max_length=4,default=" ")

class ImageEvent(models.Model):
    eventId=models.ForeignKey(Events,on_delete=models.CASCADE)
    image=models.CharField(max_length=200,default=" ") #image as url


class Podcast(models.Model):
    title=models.CharField(max_length=30,default=" ")
    youtube_url=models.CharField(max_length=200,default=" ")
    spotify_url=models.CharField(max_length=200,default=" ")
    google_podcast_url=models.CharField(max_length=200,default=" ")
    sound_cloud =models.CharField(max_length=200, default=" ")
    views=models.IntegerField(default=0)
    likes=models.IntegerField(default=0)