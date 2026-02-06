from django.urls import path
from .views import signup, upload_retinal_image, login, profile, recent_retinal_images

urlpatterns = [
    path('signup/', signup),
    path('login/', login, name='login'),
    path("retinal-images/", upload_retinal_image),
    path("profile/", profile),
    path("retina/recent/", recent_retinal_images),

]
