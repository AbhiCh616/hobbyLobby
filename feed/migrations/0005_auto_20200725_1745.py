# Generated by Django 3.0.7 on 2020-07-25 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0004_music_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='dance',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to=None),
        ),
        migrations.AddField(
            model_name='skating',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to=None),
        ),
    ]
