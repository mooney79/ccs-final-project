from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Well, Plug, Perforation, Casing, Cement, Hole
from .serializers import WellSerializer, PlugSerializer, PerforationSerializer, CasingSerializer, CementSerializer, HoleSerializer, WellFeaturesSerializer
# from .permissions import IsOwnerOrReadOnly 


class WellFeaturesDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Well.objects.all()
    serializer_class = WellFeaturesSerializer

class WellListAPIView(generics.ListCreateAPIView):
    queryset = Well.objects.all()
    serializer_class = WellSerializer

class WellDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Well.objects.all()
    serializer_class = WellSerializer

    def get_queryset(self):
        pk = self.kwargs['pk']
        return Well.objects.filter(pk=pk)
    
class PersonalWellsListAPIView(generics.ListCreateAPIView):
    serializer_class = WellSerializer

    def get_queryset(self):
        # queryset = Well.objects.all()
        queryset = Well.objects.filter(user=self.request.user)
        return queryset