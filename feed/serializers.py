from rest_framework import serializers
from feed.models import Music,Dance,Skating


class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = '__all__'
class DanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dance
        fields = '__all__'
class SkatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skating
        fields = '__all__'