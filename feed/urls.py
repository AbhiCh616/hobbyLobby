from django.urls import path
from feed.views import musicList
from feed.views import danceList
from feed.views import skatingList

urlpatterns = [
    path('music_list/', musicList),
    path('dance_list/', danceList),
    path('skating_list/', skatingList),
]
