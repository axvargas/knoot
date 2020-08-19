from rest_framework import serializers
from .models import Anuncio, Categoria, Habilidad


class HabilidadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Habilidad
        fields=['id','nombre']


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categoria
        fields='__all__'


class AnuncioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Anuncio
        fields=['id','nombre','descripcion','habilidad','banner','estado','fecha_inicio','fecha_termino','vacantes','cant_interesados','categoria']

    habilidad = HabilidadSerializer(many=True)

    def create(self, validated_data):
        habilidades_datos = validated_data.pop('habilidad')
        anuncio = Anuncio.objects.create(**validated_data)

        for habil in habilidades_datos:
            habil, created = Habilidad.objects.get_or_create(nombre=habil['nombre'])
            anuncio.habilidad.add(habil)
        return anuncio

    def update(self, instance, validated_data):
        habilidades_datos = validated_data.pop('habilidad')
        instance.nombre = validated_data['nombre']
        instance.descripcion = validated_data['descripcion']
        instance.banner = validated_data['banner']
        instance.estado = validated_data['estado']
        instance.fecha_termino = validated_data['fecha_termino']
        instance.vacantes = validated_data['vacantes']
        instance.cant_interesados = validated_data['cant_interesados']

        for habil in habilidades_datos:
            habil, created = Habilidad.objects.update_or_create(nombre=habil['nombre'])
            instance.habilidad.add(habil)
        return instance




