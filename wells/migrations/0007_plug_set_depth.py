# Generated by Django 3.2.9 on 2021-11-08 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wells', '0006_plug_plug_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='plug',
            name='set_depth',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
