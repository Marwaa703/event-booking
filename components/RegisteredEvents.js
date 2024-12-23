import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { selectReservations } from "../redux/slices/reservationSlice";
import EventCard from "./EventCard";

const RegisteredEvents = () => {
  const reservations = useSelector(selectReservations);

  if (!reservations || reservations.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No events registered yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={reservations}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <EventCard eventt={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
  },
});

export default RegisteredEvents;
