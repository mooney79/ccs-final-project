from django.contrib import admin
from .models import Well, Cement, Hole, Casing, Plug, Perforation

# Register your models here.

admin.site.register(Well)
admin.site.register(Cement)
admin.site.register(Hole)
admin.site.register(Casing)
admin.site.register(Plug)
admin.site.register(Perforation)