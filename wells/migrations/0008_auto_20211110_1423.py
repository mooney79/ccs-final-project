# Generated by Django 3.2.9 on 2021-11-10 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wells', '0007_plug_set_depth'),
    ]

    operations = [
        migrations.AlterField(
            model_name='well',
            name='company',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='current_status',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='field',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='initial_formation',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='lease',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='well',
            name='location',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='section',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='survey',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
