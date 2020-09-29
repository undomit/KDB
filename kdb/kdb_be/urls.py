from kdb_be import views
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('api/category/all', views.CategoryList.as_view()),
    path('api/category/add', views.CategoryList.as_view()),
    path('api/category/<int:pk>/', views.CategoryDetail.as_view()),
    path('api/carrier/all', views.CarrierList.as_view()),
    path('api/carrier/add', views.CarrierList.as_view()),
    path('api/carrier/<int:pk>/', views.CarrierDetail.as_view()),
    path('api/issue/all', views.IssueList.as_view()),
    path('api/issue/add', views.IssueList.as_view()),
    path('api/issue/<int:pk>/', views.IssueDetail.as_view()),
    path('api/user/all', views.UserList.as_view()),
    path('api/user/add', views.UserList.as_view()),
    path('api/user/<int:pk>', views.UserDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
