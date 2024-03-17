from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Posts(models.Model):
    event_name=models.CharField(max_length=50)
    
    date=models.DateField()
    
    time=models.TimeField()
    
    location=models.CharField(max_length=50)
    
    image=models.URLField(blank=True,null=True)
    
    is_liked=models.ManyToManyField(User,related_name="users",blank=True)
    
    user_id = models.IntegerField(null=True,blank=True)
   