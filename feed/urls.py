from django.urls import path
from . import views


urlpatterns = [
    path('music_list/', views.musicList, name='music_list'),
    path('dance_list/', views.danceList, name='dance_list'),
    path('skating_list/', views.skatingList, name='skating_list'),
    path('music_list/create/', views.musicCreate, name='music_create'),
    path('dance_list/create/', views.danceCreate, name='dance_create'),
    path('skating_list/create/', views.skatingCreate, name='skating_create'),
]
