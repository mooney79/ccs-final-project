from django.urls import path, include
# from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('<int:pk>/features/', views.WellFeaturesDetailAPIView.as_view(), name="well_feature_detail"),
]