from kdb_be import views
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('api/category/all', views.CategoryList.as_view()),
    path('api/topic/all', views.TopicList.as_view()),
    path('api/category/<int:pk>/', views.CategoryDetail.as_view()),
    path('api/topic/<int:pk>/', views.TopicDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
