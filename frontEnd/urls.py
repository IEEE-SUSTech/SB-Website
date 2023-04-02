from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('test/', views.index),
    path('pastEvents/', views.index),
    path('teams/', views.index),
    path('magazine/', views.index),
    path('podcast/', views.index),
    path('aboutUs/', views.index),
    path('pastEvents/<int:year>/', views.index),
    path('pastEvents/<int:year>/<int:month>/', views.index),
]
