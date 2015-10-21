from django.conf.urls import include, url
from .views import app

urlpatterns = [
    url(r'', app)
]