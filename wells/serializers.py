from rest_framework import serializers
from .models import Well, Plug, Hole, Perforation, Cement, Casing

class WellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Well
        fields = '__all__'


    


class PlugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plug
        fields = '__all__'

        # def get_queryset(self):
        #     well = self.kwargs['well']
        #     return Plug.objects.filter(well=pk)

class HoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hole
        fields = '__all__'

class PerforationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perforation
        fields = '__all__'

class CementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cement
        fields = '__all__'

class CasingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Casing
        fields = '__all__'


class WellFeaturesSerializer(serializers.ModelSerializer):
    holes = HoleSerializer(many=True, read_only=True)
    perforations = PerforationSerializer(many=True, read_only=True)
    casings = CasingSerializer(many=True, read_only=True)
    plugs = PlugSerializer(many=True, read_only=True)
    cements = CementSerializer(many=True, read_only=True)
#queryset = Plug.objects.filter(well = 1)

    class Meta:
        model = Well
        fields = ['API_number', 'holes', 'perforations', 'casings', 'plugs', 'cements']