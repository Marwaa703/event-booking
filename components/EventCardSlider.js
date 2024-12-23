import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const EventCardSlider = ({ event }) => {
  const router = useRouter();

  const handlePress = () => {
    if (event?.id) {
      router.push(`/events/${event.id}`);
    } else {
      console.error("No event ID available");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
      <View style={styles.card}>
        <ImageBackground
          source={{ uri: event.image }}
          style={styles.image}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={styles.overlay} />
          <View style={styles.details}>
            <Text style={styles.title}>{event.name}</Text>
            <Text style={styles.location}>📍 {event.location}</Text>
            <Text style={styles.date}>
              🗓️ {new Date(event.date).toLocaleString()}
            </Text>
            <Text style={styles.seats}>
              🎟️ {event.available} Seats Available
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 1 - 30,
    height: 450,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
  },
  details: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  location: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  seats: {
    color: "#FFA001",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default EventCardSlider;
