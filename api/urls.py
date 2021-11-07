from django.urls import path, include
from . import views

urlpatterns = [
    path('wells/', include('wells.urls')),
    path('prices/latest/', views.get_price_latest, name="latest"),
    path('prices/past_week/', views.get_price_week),
    path('prices/past_month/', views.get_price_month),
]
