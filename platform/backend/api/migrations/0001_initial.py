# Generated by Django 3.2.23 on 2024-02-02 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dataset',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('challenge_id', models.IntegerField(default=1)),
                ('dataset', models.JSONField()),
                ('data', models.BinaryField()),
            ],
        ),
        migrations.CreateModel(
            name='Mlmodel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('challenge_id', models.IntegerField(default=1)),
                ('model', models.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('challenge_id', models.IntegerField(default=1)),
                ('score', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Xaimethod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('challenge_id', models.IntegerField(default=1)),
                ('xai_method', models.JSONField()),
            ],
        ),
    ]
