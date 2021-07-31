from django.contrib import admin
from .models import Category, Carrier, Issue
from django.contrib.auth.models import User
from django.conf.locale.es import formats as es_formats

es_formats.DATETIME_FORMAT = "d M Y H:i:s"

admin.site.register(Category)
admin.site.register(Carrier)
admin.site.register(Issue)

# Register your models here.
