from django.urls import path
from .views import signup
from .views import upload_retinal_image

urlpatterns = [
    path('signup/', signup),
    path("retinal-images/", upload_retinal_image),
]
