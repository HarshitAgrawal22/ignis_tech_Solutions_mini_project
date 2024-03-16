from django.contrib import admin

# Register your models here.
from .models import *

@admin.register(Posts)
class PostAdmin(admin.ModelAdmin):
     list_display=["event_name",
    
    "date",
    
    "time",
    
    "location",
    
    "image",
    
   
    "user_id" ,
    ]
