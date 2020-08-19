from django.contrib import admin
from django.urls import path

from rest_framework.routers import DefaultRouter
from knoot.views import AnuncioViewSet,CategoriaViewSet,HabilidadViewSet

router = DefaultRouter()
router.register(r'Anuncios',AnuncioViewSet)
router.register(r'Categorias',CategoriaViewSet)
router.register(r'Habilidades',HabilidadViewSet)

urlpatterns = router.urls

urlpatterns += [
    path('admin/', admin.site.urls),
]
