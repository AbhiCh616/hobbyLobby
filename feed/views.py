from feed.serializers import MusicSerializer
from feed.serializers import DanceSerializer
from feed.serializers import SkatingSerializer
from feed.models import Music
from feed.models import Dance
from feed.models import Skating
from django.http import HttpResponseRedirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import authentication_classes, permission_classes


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def musicList(request):
    musics = Music.objects.all()
    serializer = MusicSerializer(musics, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def danceList(request):
    dances = Dance.objects.all()
    serializer =DanceSerializer(dances, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def skatingList(request):
    skatings = Skating.objects.all()
    serializer = SkatingSerializer(skatings, many=True)
    return Response(serializer.data)