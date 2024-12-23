import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native";
import Animated, { Easing, FadeIn, FadeInDown } from "react-native-reanimated";

import { fetchEvents } from "../../../api/event";
import EventCardSlider from "../../../components/EventCardSlider";
import EventCard from "../../../components/EventCard";

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const [bestEvents, setBestEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const eventList = await fetchEvents();
        setBestEvents(eventList.slice(0, 4));
        setEvents(eventList);
      } catch (err) {
        setError("Failed to fetch events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFA001" />
        <Text style={[styles.subtitle, { marginTop: 20 }]}>
          Loading events...
        </Text>
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

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <Animated.View
          entering={FadeIn.duration(1000).easing(
            Easing.bezier(0.25, 0.1, 0.25, 1)
          )}
        >
          <Text style={styles.bigTitle}>Discover Events</Text>
          <Text style={styles.subtitle}>Find the perfect event for you</Text>
        </Animated.View>
      </View>

      <Animated.View entering={FadeInDown.delay(300).duration(700)}>
        <Text style={styles.sectionHeader}>Featured Events</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.sliderContainer}
          contentContainerStyle={styles.sliderContent}
        >
          {bestEvents.map((eventt) => (
            <EventCardSlider key={eventt.id} event={eventt} />
          ))}
        </ScrollView>

        <View style={styles.allEventsSection}>
          <Text style={styles.sectionHeader}>All Events</Text>
          <View style={styles.eventsGrid}>
            {events.map((eventt) => (
              <EventCard key={eventt.id} eventt={eventt} />
            ))}
          </View>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141d1f",
  },
  headerContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#1a2426",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bigTitle: {
    fontSize: 36,
    fontWeight: "800",
    color: "#FFA001",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFA001",
    marginVertical: 20,
    marginLeft: 20,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  sliderContent: {
    paddingHorizontal: 15,
  },
  allEventsSection: {
    flex: 1,
    paddingHorizontal: 15,
  },
  eventsGrid: {
    flex: 1,
    paddingBottom: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141d1f",
  },
  errorText: {
    color: "#ff4444",
    fontSize: 16,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#141d1f",
    justifyContent: "center",
    alignItems: "center",
  },
});
