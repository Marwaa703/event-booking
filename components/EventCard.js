import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { selectReservations } from "../redux/slices/reservationSlice";

const EventCard = ({ eventt }) => {
  const router = useRouter();
  const user = useSelector((state) => state?.user?.user);
  const reservations = useSelector(selectReservations);
  const isReserved = reservations.some((r) => r.id === eventt.id);

  const handlePress = () => {
    if (!user) {
      Alert.alert(
        "Authentication Required",
        "Please log in to view event details",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Login", onPress: () => router.push("/Login") },
        ]
      );
      return;
    }

    if (eventt?.id) {
      router.push(`/events/${eventt.id}`);
    } else {
      console.error("No event ID available");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
      <View style={[styles.card, isReserved && styles.reservedCard]}>
        <Image source={{ uri: eventt?.image }} style={styles.image} />
        <View style={styles.details}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{eventt.name}</Text>
            {isReserved && <Text style={styles.reservedBadge}>Reserved</Text>}
          </View>
          <Text style={styles.date}>
            {new Date(eventt.date).toLocaleString()}
          </Text>
          <Text style={styles.price}>${eventt.price}</Text>
          <Text style={styles.description}>
            {eventt.description.length > 100
              ? eventt.description.substring(0, 100) + "..."
              : eventt.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#1e1e2f",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 10,
    padding: 12,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFA001",
  },
  date: {
    color: "#aaa",
    fontSize: 14,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF6347",
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: "#fff",
    lineHeight: 18,
    fontWeight: "300",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reservedCard: {
    borderColor: "#28a745",
    borderWidth: 1,
  },
  reservedBadge: {
    color: "#28a745",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default EventCard;
