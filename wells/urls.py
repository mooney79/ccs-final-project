from django.urls import path, include
# from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('perforations/<int:pk>/', views.PerforationDetailAPIView.as_view(), name="perforation_detail"),
    path('cements/<int:pk>/', views.CementDetailAPIView.as_view(), name="cement_detail"),
    path('casings/<int:pk>/', views.CasingDetailAPIView.as_view(), name="casing_detail"),
    path('plugs/<int:pk>/', views.PlugDetailAPIView.as_view(), name="plug_detail"),
    path('holes/<int:pk>/', views.HoleDetailAPIView.as_view(), name="hole_detail"),
    path('<int:pk>/features/', views.WellFeaturesDetailAPIView.as_view(), name="well_feature_detail"),
    path('<int:pk>/', views.WellDetailAPIView.as_view(), name="well_detail"),
    path('user/', views.PersonalWellsListAPIView.as_view(), name="personal_wells_list"),
    path('', views.WellListAPIView.as_view(), name="well_list"),

]

#/api/wells/pk/features/