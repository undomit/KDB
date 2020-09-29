from django.shortcuts import render

from django.shortcuts import render
from .serializers import CategorySerializer, CarrierSerializer, IssueSerializer, UserSerializer
from .models import Category, Carrier, Issue, User
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CarrierList(generics.ListCreateAPIView):
    queryset = Carrier.objects.all()
    serializer_class = CarrierSerializer

class CarrierDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Carrier.objects.all()
    serializer_class = CarrierSerializer

class IssueList(generics.ListCreateAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

class IssueDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

class UserList(generics.ListCreateAPIView):
    queryset =  User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
