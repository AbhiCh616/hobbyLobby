from django.urls import path
from feed.views import musicList,danceList,skatingList,MusicCreate


urlpatterns = [
    path('music_list/', musicList),
    path('dance_list/', danceList),
    path('skating_list/', skatingList),
    path('music_list/create',MusicCreate),
]
