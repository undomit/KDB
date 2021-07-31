from django.db import models

class Category(models.Model):
    name = models.CharField(max_length = 30)
    created = models.DateTimeField(auto_now_add = True)
    kind = models.CharField(max_length = 30)
    parent_id = models.ForeignKey(
            'self',
            related_name = 'child_set',
            on_delete = models.CASCADE,
            null = True,
            blank = True)

    def __str__(self):
        return self.name

class Carrier(models.Model):
    name = models.CharField(max_length = 30)
    created = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.name

class Issue(models.Model):
    name = models.CharField(max_length = 30)
    created = models.DateTimeField(auto_now_add = True)
    description = models.TextField()
    solution = models.TextField()
    carrier_id = models.ForeignKey(
        'Carrier',
        on_delete = models.CASCADE,
        )
    category_id = models.ForeignKey(
        'Category',
        on_delete = models.CASCADE,
    )

    def __str__(self):
        return self.name
"""
class User(models.Model):
    username = models.CharField(max_length = 30)
    password = models.CharField(max_length = 30)
    firstName = models.CharField(max_length = 30)
    lastName = models.CharField(max_length = 30)
    email = models.CharField(max_length = 30)
    created = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.username
"""