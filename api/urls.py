from django.urls import path, include

urlpatterns = [
    path('wells/', include('wells.urls')),
]
