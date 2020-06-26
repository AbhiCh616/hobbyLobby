from django.db import models

# Create your models here.
class Music(models.Model):
    post_id = models.AutoField(primary_key=True)
    #user_id = models.ForeignKey("feed.models", verbose_name=(""), on_delete=models.CASCADE)
    post_date = models.DateTimeField((""), auto_now=False, auto_now_add=False)
    caption = models.TextField((""))
    img = models.ImageField((""), upload_to=None, height_field=None, width_field=None, max_length=None)

class Dance(models.Model):
    post_id = models.AutoField(primary_key=True)
    #user_id = models.ForeignKey("feed.models", verbose_name=(""), on_delete=models.CASCADE)
    post_date = models.DateTimeField((""), auto_now=False, auto_now_add=False)
    caption = models.TextField((""))
    img = models.ImageField((""), upload_to=None, height_field=None, width_field=None, max_length=None)

class Skating(models.Model):
    post_id = models.AutoField(primary_key=True)
    #user_id = models.ForeignKey("feed.models", verbose_name=(""), on_delete=models.CASCADE)
    post_date = models.DateTimeField((""), auto_now=False, auto_now_add=False)
    caption = models.TextField((""))
    img = models.ImageField((""), upload_to=None, height_field=None, width_field=None, max_length=None)


class User(models.Model):
    pass

"""post_id (primary key)
- user_id (foreign key)
- date & time
- text
- image"""