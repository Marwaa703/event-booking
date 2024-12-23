import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import {
  addReservation,
  selectReservations,
} from "../../../redux/slices/reservationSlice";
import { fetchEventById } from "../../../api/event";
import { useLocalSearchParams } from "expo-router";

const EventDetail = () => {
  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state?.user?.user);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const reservations = useSelector(selectReservations);


  const isReserved = reservations.some((r) => r.id === id);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        setLoading(true);
        const eventDetails = await fetchEventById(id);
        if (eventDetails) {
          setEvent(eventDetails);
          setError(null);
        } else {
          setError("Event not found");
        }
      } catch (err) {
        console.error("Error loading event:", err);
        setError("Failed to load event details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadEvent();
    } else {
      setError("Invalid event ID");
      setLoading(false);
    }
  }, [id]);

  const handleReservation = () => {
    if (!user) {
      Alert.alert(
        "Authentication Required",
        "Please log in to reserve this event",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Login",
            onPress: () => {
              router.push({
                pathname: "/Login",
                params: { returnTo: `/events/${id}` },
              });
            },
          },
        ]
      );
      return;
    }

    try {
      if (isReserved) {
        Alert.alert(
          "Already Reserved",
          "You have already reserved this event!"
        );
        return;
      }

      dispatch(addReservation(event));
      Alert.alert("Success", "You have reserved the event!");
    } catch (error) {
      console.error("Reservation error:", error);
      Alert.alert("Error", "Failed to reserve event. Please try again.");
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FFA001" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!event) {
    return (
      <View style={styles.center}>
        <Text>No event data available.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: event.image }} style={styles.eventImage} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{event.name}</Text>
        <View style={styles.dateLocationContainer}>
          <Text style={styles.date}>
            📅 {new Date(event.date).toLocaleString()}
          </Text>
          <Text style={styles.location}>📍 {event.location}</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Speakers</Text>
            <Text style={styles.infoValue}>{event.speakers}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Capacity</Text>
            <Text style={styles.infoValue}>{event.capacity}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Available Seats</Text>
            <Text style={[styles.infoValue, styles.highlight]}>
              {event.available}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Price</Text>
            <Text style={[styles.infoValue, styles.highlight]}>
              ${event.price}
            </Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>About Event</Text>
          <Text style={styles.description}>{event.description}</Text>
        </View>

        <View style={styles.reserveContainer}>
          <TouchableOpacity
            style={[styles.reserveButton, isReserved && styles.reservedButton]}
            onPress={handleReservation}
            disabled={isReserved}
          >
            <Text style={styles.reserveButtonText}>
              {isReserved ? "✓ Reserved" : "Reserve Event"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141d1f",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "#000",
  },
  eventImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#141d1f",
    marginTop: -30,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFA001",
    marginBottom: 15,
  },
  dateLocationContainer: {
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: "#aaa",
  },
  infoCard: {
    backgroundColor: "#1a2426",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: "#aaa",
  },
  infoValue: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  highlight: {
    color: "#FFA001",
  },
  divider: {
    height: 1,
    backgroundColor: "#2a3436",
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 24,
  },
  reserveContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  reserveButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#FF6347",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  reservedButton: {
    backgroundColor: "#28a745",
  },
  reserveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#ff4444",
    fontSize: 16,
  },
});

export default EventDetail;
