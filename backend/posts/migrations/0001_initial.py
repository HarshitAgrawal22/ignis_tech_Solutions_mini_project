# Generated by Django 4.2.7 on 2024-03-15 18:36

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(max_length=50)),
                ('data', models.DateField()),
                ('time', models.TimeField()),
                ('location', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='posts_images')),
                ('user_id', models.IntegerField()),
                ('is_liked', models.ManyToManyField(blank=True, related_name='users', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
