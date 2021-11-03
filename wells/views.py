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

class HoleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hole.objects.all()
    serializer_class = HoleSerializer

    def get_queryset(self):
        pk = self.kwargs['pk']
        return Hole.objects.filter(pk=pk)

class CasingDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Casing.objects.all()
    serializer_class = CasingSerializer

    def get_queryset(self):
        pk = self.kwargs['pk']
        return Casing.objects.filter(pk=pk)

class CementDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cement.objects.all()
    serializer_class = CementSerializer

    def get_queryset(self):
        pk = self.kwargs['pk']
        return Cement.objects.filter(pk=pk)

class PerforationDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Perforation.objects.all()
    serializer_class = PerforationSerializer

    def get_queryset(self):
        pk = self.kwargs['pk']
        return Perforation.objects.filter(pk=pk)

class PlugDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Plug.objects.all()
    serializer_class = PlugSerializer

    def get_queryset(self):
        pk = self.kwargs['pk']
        return Plug.objects.filter(pk=pk)