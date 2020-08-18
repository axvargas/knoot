from django.db import models

class Habilidad(models.Model):
     nombre = models.CharField(max_length=50, blank=True, null=False, default='No disponible')

     def __str__(self):
         return self.nombre

class Categoria(models.Model):
    nombre = models.CharField(max_length=50, blank=True, null=False, default='No disponible')
    descripcion = models.CharField(max_length=250, blank=True, null=False, default='No disponible')
    
    def __str__(self):
        return self.nombre

class Anuncio(models.Model):
    nombre = models.CharField(max_length=50, blank=True, null=False, default ='No disponible')
    descripcion = models.CharField(max_length=50, blank=True, null=False, default='Dato no ingresado')
    banner = models.CharField(max_length=300, blank=True, null=False, default='No posee banner')
    estado = models.BooleanField(default=1);
    fecha_inicio = models.DateField(auto_now_add=True, null=True)
    fecha_termino = models.DateField(auto_now=False, null=True)
    vacantes = models.IntegerField(default=0)
    cant_interesados = models.IntegerField(default=0)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, blank=True, null=True)
    habilidad = models.ManyToManyField(Habilidad)

    def __str__(self):
        return self.nombre

