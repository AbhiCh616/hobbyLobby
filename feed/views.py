from feed.serializers import MusicSerializer, DanceSerializer, SkatingSerializer
from feed.models import Music, Dance, Skating
from django.http import HttpResponseRedirect
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def musicList(request):
    musics = Music.objects.all()
    serializer = MusicSerializer(musics, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def danceList(request):
    dances = Dance.objects.all()
    serializer = DanceSerializer(dances, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def skatingList(request):
    skatings = Skating.objects.all()
    serializer = SkatingSerializer(skatings, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def MusicCreate(request):
    serializer = MusicSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return True
    return False
