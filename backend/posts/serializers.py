from rest_framework import serializers
from .models import Posts
from django.contrib.auth.models import User
from rest_framework_simplejwt import authentication


class UserRegistrationSerializers(serializers.ModelSerializer):
    password=serializers.CharField(style={
        'input_type':"password"
    },write_only=True)
    class Meta:
        model=User
        fields=["username","password","email"]
        extra_kwargs={
            "password":{
                "write_only":True
            }
        }
    
    def validate(self, attrs):
        #TODO add the conditions needed to validate the student 
        password=attrs.get("password")
        username=attrs.get("username")
        if password is not None and username is not None:
            return attrs
        raise serializers.ValidationError('Ivalid data sent')
    
    
    
    def create(self,validated_data):
        
        # the purpose of this method is to validate the data before registering the new Student
        student=User.objects.create(username=validated_data.get
                                        ("username"))
        # TODO we need to add email field while registration
        student.set_password(validated_data.get("password"))
        student.save()
        return student
    
    
#=========================================================================================================================================================================================================================
   

class UserLoginSerializer(serializers.ModelSerializer):
    username=serializers.CharField()
    password=serializers.CharField(style={
        "input_type":"password"
    })
    class Meta: 
        model=User
        fields=["username","password"]
        
        
        
#=========================================================================================================================================================================================================================
   


class PostSerializers(serializers.ModelSerializer):
    # TODO model serializers give us the advantage to create the meta class 
    
    class Meta:
        model=Posts# defining the model for which we have created the api
        fields=["event_name",
    
    "date",
    
    "time",
    
    "location",
    
    
    
   
    
    ]
 # the fields we are going to use in it
        
    
        
        
        
#=========================================================================================================================================================================================================================
   
  
