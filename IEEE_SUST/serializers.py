from rest_framework import serializers
from .models import *

class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model=Podcast
        fields='__all__'

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Events
        fields='__all__'