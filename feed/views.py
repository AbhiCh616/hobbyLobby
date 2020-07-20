from feed.serializers import MusicSerializer
from feed.models import Music
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
