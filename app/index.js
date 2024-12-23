import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Animated, { BounceIn } from "react-native-reanimated";
import { useRouter} from "expo-router";

const App = () => {
  const router = useRouter();

  const handlePress = () => {
    try {
      router.push("./events");
    } catch (error) {
      console.error("Navigation error:", error.message);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Title and Subtitle */}
        <View style={styles.header}>
          <Text style={styles.title}>Event Booking App</Text>
          <Text style={styles.subtitle}>
            Your gateway to unforgettable experiences.
          </Text>
        </View>

        {/* Animated Button */}
        <Animated.View entering={BounceIn} style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Go to Events</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    position: "absolute",
    top: "20%",
    alignItems: "center",
  },
  title: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 30,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  },
  button: {
    backgroundColor: "#fe6810",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
