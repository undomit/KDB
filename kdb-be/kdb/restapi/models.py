from django.db import models

class Category(models.Model):
    name = models.CharField(max_length = 30)
    created = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.name

class Topic(models.Model):
    category = models.ForeignKey(Category, on_delete = models.CASCADE)
    name = models.CharField(max_length = 30)
    created = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.name
