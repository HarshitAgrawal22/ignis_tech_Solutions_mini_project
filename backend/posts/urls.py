from django.urls import path,include
from . import views

urlpatterns = [
    path('all-posts/', views.AllPostView.as_view(), name='all-posts'),
    path('create-post/', views.PostCreateView.as_view(), name='create-post'),
    path('specific-posts/', views.UserSpecificPostView.as_view(), name='specific-post'),
    path('user-register/', views.UserRegistrationView.as_view(), name='register'),
    path('user-login/', views.UserLoginView.as_view(), name='login'),
    # path('all-posts/', views..as_view(), name='all-posts'),
    # path('all-posts/', views..as_view(), name='all-posts'),
]
    
   

