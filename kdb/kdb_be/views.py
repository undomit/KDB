from django.shortcuts import render

from django.shortcuts import render
from .serializers import CategorySerializer, CarrierSerializer, IssueSerializer, UserSerializer
from .models import Category, Carrier, Issue
from django.contrib.auth.models import User
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

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
    #lookup_field = 'id'
    serializer_class = IssueSerializer

    def delete(self, request, *args, **kwargs):
        try:
            id = request.data.get('id', None)
            response = super().delete(request, *args, **kwargs)

            if response.status_code == 204:
                from django.core.cache import cache
                cache.delete('{}'.format(id))
                return response

            pass
        except Exception as e:
            return Response({
                "Message": "Failed"
            })

    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)
        if response.status_code == 200:
            mydata = response.data

            from django.core.cache import cache

            cache.set("ID: {}".format(mydata.get('id', None)), {
                'name': mydata["name"],
                'description': mydata["description"],
                'solution': mydata["solution"],
                'carrier_id': mydata["carrier_id"],
                'category_id': mydata["category_id"]
            })

            return response


class UserList(generics.ListCreateAPIView):
    queryset =  User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


from django.contrib.auth import login

from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)