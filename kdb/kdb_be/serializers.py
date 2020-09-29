from rest_framework import serializers
from .models import Category, Carrier, Issue, User

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ['id', 'name', 'kind', 'created', 'parent_id']

class CarrierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrier
        fields = ['id', 'name', 'created']

class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields= ['id', 'name', 'category_id', 'description', 'solution', 'carrier_id', 'created']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'firstName', 'lastName', 'created']
