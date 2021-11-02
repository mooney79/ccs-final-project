# Generated by Django 3.2.8 on 2021-11-02 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wells', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='well',
            name='completion_date',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='well',
            name='derrick_floor',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='well',
            name='spud_date',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
