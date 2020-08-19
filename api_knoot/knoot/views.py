from django.shortcuts import render
from rest_framework import viewsets
from .models import Anuncio, Categoria, Habilidad
from .serializers import AnuncioSerializer,CategoriaSerializer,HabilidadSerializer

class AnuncioViewSet(viewsets.ModelViewSet):
    serializer_class=AnuncioSerializer
    queryset=Anuncio.objects.all()

class CategoriaViewSet(viewsets.ModelViewSet):
    serializer_class=CategoriaSerializer
    queryset=Categoria.objects.all()

class HabilidadViewSet(viewsets.ModelViewSet):
    serializer_class=HabilidadSerializer
    queryset=Habilidad.objects.all()