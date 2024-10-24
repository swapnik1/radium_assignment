from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import User

class UserAPITests(APITestCase):
    
    def setUp(self):
        self.user = User(
            name="Test User1",
            date_of_birth="1990-01-01"
        )
        self.user.save()
        self.base_url = reverse('user-list')

    def test_create_user(self):
        data = {
            "name": "Test User2",
            "date_of_birth": "1992-05-05"
        }
        response = self.client.post(self.base_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 2)
        self.assertEqual(User.objects.get(name="Test User2").name, "Test User2")

    def test_get_users(self):
        response = self.client.get(self.base_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_get_specific_user(self):
        response = self.client.get(reverse('user-detail', args=[self.user.id]))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], "Test User1")

    def test_update_user(self):
        data = {
            "name": "Test User3",
            "date_of_birth": "1990-01-01"
        }
        response = self.client.put(reverse('user-detail', args=[self.user.id]), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.user.refresh_from_db()
        self.assertEqual(self.user.name, "Test User3")

    def test_delete_user(self):
        response = self.client.delete(reverse('user-detail', args=[self.user.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(User.objects.count(), 0)
