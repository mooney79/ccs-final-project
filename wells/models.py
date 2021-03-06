from django.db import models
from accounts.models import User

# Required fields -- API, Lease, well number, total depth

class Well(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    API_number = models.CharField(max_length=100)
    company = models.CharField(max_length=255, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True) 
    lease = models.CharField(max_length=255)
    well_number = models.CharField(max_length=100)
    field = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    section = models.CharField(max_length=255, blank=True, null=True)
    spud_date = models.CharField(max_length=100, blank=True, null=True)
    # spud_date = models.DateField(blank=True, null=True)
    survey = models.CharField(max_length=255, blank=True, null=True)
    total_depth = models.IntegerField()
    permit_number = models.CharField(max_length=100, blank=True, null=True)
    completion_date = models.CharField(max_length=100, blank=True, null=True)
    # completion_date = models.DateField(blank=True, null=True)
    county = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    kelley_bushing = models.CharField(max_length=100, blank=True, null=True)
    derrick_floor = models.CharField(max_length=100, blank=True)
    initial_formation = models.CharField(max_length=255, blank=True, null=True)
    current_status = models.CharField(max_length=255, blank=True, null=True)
    ground_level = models.IntegerField(blank=True, null=True)
    plat_image = models.ImageField(upload_to="media/", null=True, default=None, blank=True)

    def __str__(self):
        return f"{self.lease} {self.well_number}"


class Cement(models.Model):
    well = models.ForeignKey(Well, on_delete=models.CASCADE, null=True, related_name="cements")
    starting_depth = models.IntegerField()
    ending_depth = models.IntegerField()
    sacks_pumped = models.IntegerField(blank=True, null=True)
    cement_type = models.CharField(max_length=100, blank=True, null=True)

class Casing(models.Model):
    well = models.ForeignKey(Well, on_delete=models.CASCADE, null=True, related_name="casings")
    starting_depth = models.IntegerField()
    ending_depth = models.IntegerField()
    casing_weight = models.CharField(max_length=100, blank=True, null=True)
    casing_grading = models.CharField(max_length=100, blank=True, null=True)
    XLARGE = 'xlg'
    LARGE = 'lrg'
    MEDIUM = 'med'
    REGULAR = 'reg'
    SMALL = 'sml'
    XSMALL = 'xsm'
    GAUGE_CHOICES = [
        (XLARGE, '13 3/8"'),
        (LARGE, '9 5/8"'),
        (MEDIUM, '8 5/8"'),
        (REGULAR, '7"'),
        (SMALL, '5 1/2"'),
        (XSMALL, '4 1/2"'),
    ]
    gauge = models.CharField(
        max_length=3,
        choices=GAUGE_CHOICES,
        default=LARGE,
    )

class Perforation(models.Model):
    well = models.ForeignKey(Well, on_delete=models.CASCADE, null=True, related_name="perforations")
    starting_depth = models.IntegerField()
    ending_depth = models.IntegerField()
    perforation_interval = models.CharField(max_length=100, blank=True, null=True)
    perforation_total_holes = models.CharField(max_length=100, blank=True, null=True)
    
class Plug(models.Model):
    well = models.ForeignKey(Well, on_delete=models.CASCADE, null=True, related_name="plugs")
    starting_depth = models.IntegerField()
    ending_depth = models.IntegerField()
    set_depth = models.IntegerField(blank=True, null=True)
    sacks_pumped = models.IntegerField(blank=True, null=True)
    cement_type = models.CharField(max_length=100, blank=True, null=True)
    VALVE = 'DV'
    CEMENT = 'CP'
    MECHANICAL = 'MP'
    PLUG_CHOICES = [
        (VALVE, 'Diverter Valve'),
        (CEMENT, 'Cement Plug'),
        (MECHANICAL, 'Mechanical Plug'),
    ]
    plug_type = models.CharField(
        max_length=2,
        choices=PLUG_CHOICES,
        default=CEMENT,
    )

class Hole(models.Model):
    well = models.ForeignKey(Well, on_delete=models.CASCADE, null=True, related_name="holes")
    starting_depth = models.IntegerField()
    ending_depth = models.IntegerField()
    hole_size = models.CharField(max_length=100, blank=True, null=True)