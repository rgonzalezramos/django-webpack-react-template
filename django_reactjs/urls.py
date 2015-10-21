from django.conf.urls import include, url
import app.urls

urlpatterns = [
    url(r'', include(app.urls))
]
