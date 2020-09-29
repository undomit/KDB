from django.contrib import admin
from .models import Category, Carrier, Issue, User

admin.site.register(Category)
admin.site.register(Carrier)
admin.site.register(Issue)
admin.site.register(User)

# Register your models here.
