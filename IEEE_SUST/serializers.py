from rest_framework import serializers
from .models import *

class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model=Podcast
        fields='__all__'

class EventsSerializer(serializers.ModelSerializer):
    show_photo=serializers.ImageField(max_length=None,use_url=True)
    class Meta:
        model=Events
        fields='__all__'

class ImagesEventsSerializer(serializers.ModelSerializer):
    image=serializers.ImageField(max_length=None,use_url=True)
    class Meta:
        model=ImageEvent
        fields='__all__'