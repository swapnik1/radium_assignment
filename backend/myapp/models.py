from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100, unique=True)
    date_of_birth = models.DateField()
    created_on = models.DateTimeField(auto_now_add=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_anonymous = models.BooleanField(default=False)
    is_authenticated = models.BooleanField(default=True)

    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.name
