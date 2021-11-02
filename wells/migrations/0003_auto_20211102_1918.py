# Generated by Django 3.2.8 on 2021-11-02 19:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wells', '0002_auto_20211102_1502'),
    ]

    operations = [
        migrations.AlterField(
            model_name='casing',
            name='well',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='casings', to='wells.well'),
        ),
        migrations.AlterField(
            model_name='cement',
            name='well',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cements', to='wells.well'),
        ),
        migrations.AlterField(
            model_name='hole',
            name='well',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='holes', to='wells.well'),
        ),
        migrations.AlterField(
            model_name='perforation',
            name='well',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='perforations', to='wells.well'),
        ),
        migrations.AlterField(
            model_name='plug',
            name='well',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='plugs', to='wells.well'),
        ),
        migrations.AlterField(
            model_name='well',
            name='company',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='county',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='current_status',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='field',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='ground_level',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='initial_formation',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='kelley_bushing',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='location',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='permit_number',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='section',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='state',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='survey',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
