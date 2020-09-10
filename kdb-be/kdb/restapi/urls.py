from restapi import views
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('categories/', views.CategoryList.as_view()),
    path('topics/', views.TopicList.as_view()),
    path('categories/<int:pk>/', views.CategoryDetail.as_view()),
    path('topics/<int:pk>/', views.TopicDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
