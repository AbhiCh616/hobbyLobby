from django.urls import path
from feed.views import musicList

urlpatterns = [
    path('music_list/', musicList),
]
