from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('categories/list', views.index),
]
