from django.urls import path, include
# from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('<int:pk>/features/', views.WellFeaturesDetailAPIView.as_view(), name="well_feature_detail"),
    path('<int:pk>/', views.WellDetailAPIView.as_view(), name="well_detail"),
    path('user/', views.PersonalWellsListAPIView.as_view(), name="personal_wells_list"),
    path('', views.WellListAPIView.as_view(), name="well_list"),

]

#/api/wells/pk/features/