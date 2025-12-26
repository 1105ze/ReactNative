from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer
import base64
from django.core.files.base import ContentFile
from .models import Patient, RetinalImage


@api_view(['POST'])
def signup(request):
    print("🔥 signup view hit")
    print("RAW request.data:", request.data)

    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "User created successfully"},
            status=status.HTTP_201_CREATED
        )
    print("❌ serializer errors:", serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def upload_retinal_image(request):
    print("🧠 upload_retinal_image hit")
    print("RAW request data:", request.data)

    image_data = request.data.get("image_data")
    uploaded_by_type = request.data.get("uploaded_by_type")
    uploaded_by_id = request.data.get("uploaded_by_id")

    if not image_data:
        return Response(
            {"error": "image_data is required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    if uploaded_by_type != "patient":
        return Response(
            {"error": "Only patients can upload retinal images"},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        patient = Patient.objects.get(id=uploaded_by_id)
    except Patient.DoesNotExist:
        return Response(
            {"error": "Patient not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    try:
        # Decode Base64
        image_bytes = base64.b64decode(image_data)
        image_file = ContentFile(image_bytes, name="retinal_image.jpg")

        retinal_image = RetinalImage.objects.create(
            patient=patient,
            image=image_file
        )

        return Response(
            {
                "message": "Retinal image uploaded successfully",
                "retinal_image_id": retinal_image.id
            },
            status=status.HTTP_201_CREATED
        )

    except Exception as e:
        print("❌ Upload error:", str(e))
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
