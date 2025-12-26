from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer
from django.contrib.auth import authenticate
import base64
from .models import Patient, RetinalImage, User


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

@api_view(['POST'])
def upload_retinal_image(request):
    print("🧠 upload_retinal_image hit")
    print("RAW request data:", request.data)

    image_data = request.data.get("image_data")
    uploaded_by_type = request.data.get("uploaded_by_type")
    uploaded_by_id = request.data.get("uploaded_by_id")

    if not image_data:
        return Response({"error": "image_data is required"}, status=400)

    if uploaded_by_type != "patient":
        return Response({"error": "Only patients can upload retinal images"}, status=400)

    try:
        patient = Patient.objects.get(id=uploaded_by_id)
    except Patient.DoesNotExist:
        return Response({"error": "Patient not found"}, status=404)

    try:
        image_bytes = base64.b64decode(image_data)
        retinal_image = RetinalImage.objects.create(
            uploaded_by_type=uploaded_by_type,
            patient=patient,
            retinal_image=image_bytes,           # ← raw bytes
            retinal_image_size=len(image_bytes)  # ← optional but useful
        )

        return Response({
            "message": "Retinal image uploaded successfully",
            "retinal_image_id": retinal_image.id
        }, status=201)

    except base64.binascii.Error:
        return Response({"error": "Invalid base64 image data"}, status=400)
    except Exception as e:
        print("❌ Upload error:", str(e))
        return Response({"error": str(e)}, status=500)
    
@api_view(['POST'])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")

    if not username or not password:
        return Response(
            {"error": "Username and password required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    # 🔹 Check if user exists
    try:
        user_obj = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response(
            {"error": "NO_ACCOUNT"},
            status=status.HTTP_404_NOT_FOUND
        )

    # 🔹 Check password
    user = authenticate(username=username, password=password)
    if not user:
        return Response(
            {"error": "INVALID_PASSWORD"},
            status=status.HTTP_401_UNAUTHORIZED
        )

    # ✅ Success
    return Response(
        {
            "message": "Login successful",
            "user": {
                "id": user.id,
                "username": user.username,
                "role": user.role,
            }
        },
        status=status.HTTP_200_OK
    )