from django.contrib import admin
from django.urls import path

from rest_framework.routers import DefaultRouter
from knoot.views import AnuncioViewSet,CategoriaViewSet,HabilidadViewSet,FacultadViewSet,PersonaViewSet,ConsumidorViewSet,SugerenciaViewSet,NoticiaViewSet

router = DefaultRouter()
router.register(r'Anuncios',AnuncioViewSet)
router.register(r'Categorias',CategoriaViewSet)
router.register(r'Habilidades',HabilidadViewSet)
router.register(r'Facultades',FacultadViewSet)
router.register(r'Personas',PersonaViewSet)
router.register(r'Consumidores',ConsumidorViewSet)
router.register(r'Sugerencias',SugerenciaViewSet)
router.register(r'Noticias',NoticiaViewSet)

urlpatterns = router.urls

urlpatterns += [
    path('admin/', admin.site.urls),
]