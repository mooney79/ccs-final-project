from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Well, Plug, Perforation, Casing, Cement, Hole
from .serializers import WellSerializer, PlugSerializer, PerforationSerializer, CasingSerializer, CementSerializer, HoleSerializer, WellFeaturesSerializer
# from .permissions import IsOwnerOrReadOnly 


class WellFeaturesDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Well.objects.all()
    serializer_class = WellFeaturesSerializer
    lookup_field = 'pk'

    # def get_queryset(self):
    #     pk = self.kwargs['pk']
    #     return Well.objects.filter(id=pk)
    # permission_classes = [IsOwnerOrReadOnly]

# class PostListAPIView(generics.ListCreateAPIView):
#     queryset = Post.objects.order_by('-created_at')
#     serializer_class = PostSerializer
#     permission_classes = (IsAuthenticatedOrReadOnly,)

# class PostDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
#     permission_classes = (IsOwnerOrReadOnly,)

    