import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function RoleGate() {
  const router = useRouter();

  useEffect(() => {
    const decideRoute = async () => {
      const storedUser = await AsyncStorage.getItem("user");

      if (!storedUser) {
        router.replace("/");
        return;
      }

      const user = JSON.parse(storedUser);

      if (user.role === "doctor") {
        router.replace("/doctorhome");
      } else {
        router.replace("/home");
      }
    };

    decideRoute();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
