from django.shortcuts import render
from django.http.response import JsonResponse
from django.contrib import auth
from django.http import *
from rest_framework.decorators import *
from rest_framework.permissions import *
from .models import *
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.authentication import *
from django.db.models import Q
from .serializers import *


# Create your views here.


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def addPodcast(request):
    title = request.data['title']
    youtube_url = request.data['youtube_url']
    spotify_url = request.data['spotify_url']
    google_podcast_url = request.data['google_podcast_url']
    sound_cloud = request.data['soundCloud_url']
    views = 0
    likes = 0
    newPodcast = Podcast(title=title,
                         spotify_url=spotify_url,
                         youtube_url=youtube_url,
                         google_podcast_url=google_podcast_url,
                         sound_cloud=sound_cloud,
                         views=views,
                         likes=likes
                         )
    if newPodcast:
        newPodcast.save()
        return Response("The podcast has been added successfully")
    else:
        return Response("An error occurred, please see api documentation")


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def addEvent(request):
    title = request.data['title']
    mini_description = request.data['mini_description']
    show_photo = request.data['show_photo']
    description = request.data['description']
    event_year = request.data['event_year']
    newEvent = Events(title=title,
                      mini_description=mini_description,
                      show_photo=show_photo,
                      description=description,
                      event_year=event_year)
    if newEvent:
        newEvent.save()
        return Response("The event has been added successfully")
    else:
        return Response("An error occurred, please see api documentation")


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getPodcasts(request, id):
    if id == 0:
        allPodcast = Podcast.objects.all()
        ser = PodcastSerializer(allPodcast, many=True)
        return Response(ser.data)
    else:
        podcast = Podcast.objects.ger(pk=id)
        ser = PodcastSerializer(podcast)
        return Response(ser.data)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getEvents(request, id):
    if id == 0:
        allEvents = Events.objects.all()
        ser = EventsSerializer(allEvents, many=True)
        return Response(ser.data)
    else:
        event = Events.objects.ger(pk=id)
        ser = EventsSerializer(event)
        return Response(ser.data)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def getEventsByYear(request):
    year = request.data['event_year']
    allEvents = Events.objects.filter(event_year=year)
    if allEvents:
        ser = EventsSerializer(allEvents, many=True)
        return Response(ser.data)
    else:
        return Response("An error occurred, please see api documentation")
