import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import RegisteredEvents from "../../components/RegisteredEvents";
import { logout } from "../../redux/slices/userSlice";
import { selectReservations } from "../../redux/slices/reservationSlice";

const { width } = Dimensions.get("window");

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const reservations = useSelector(selectReservations);

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/Login");
  };

  if (!user) {
    return (
      <View style={styles.center}>
        <Image
          source={{
            uri: "https://via.placeholder.com/80",
          }}
          style={styles.illustration}
        />
        <Text style={styles.title}>Welcome to Event Booking App</Text>
        <Text style={styles.infoText}>
          Please log in to view your profile and manage your events
        </Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.replace("/Login")}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          {/* <Ionicons
            name="person-circle-outline"
            size={80}
            color="#FFA001"
            style={styles.avatar}
          /> */}
          <Image
            source={{
              uri: user?.avatar || "https://via.placeholder.com/80",
            }}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Events</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>48</Text>
          <Text style={styles.statLabel}>Hours</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>4.8</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.sectionHeader}>
          Your Events ({reservations?.length || 0})
        </Text>
        <View style={styles.eventsContainer}>
          <RegisteredEvents />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#FF6B6B" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141d1f",
  },
  header: {
    padding: 20,
    paddingTop: 40,
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
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFA001",
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFA001",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#aaa",
  },
  editButton: {
    backgroundColor: "#2a3436",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  editButtonText: {
    color: "#FFA001",
    fontSize: 14,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1a2426",
    marginHorizontal: 20,
    marginTop: -25,
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFA001",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: "#aaa",
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#2a3436",
  },
  contentSection: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFA001",
    marginBottom: 15,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141d1f",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFA001",
    marginBottom: 10,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  loginButton: {
    backgroundColor: "#FFA001",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 12,
    shadowColor: "#FFA001",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginHorizontal: 20,
    marginBottom: 30,
    marginTop: 10,
    backgroundColor: "#1a2426",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FF6B6B",
  },
  logoutText: {
    color: "#FF6B6B",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
  iconContainer: {
    marginBottom: 30,
    padding: 20,
    borderRadius: 60,
    backgroundColor: "rgba(255, 160, 1, 0.1)",
  },
  illustration: {
    width: width * 0.7,
    height: width * 0.7,
    marginBottom: 30,
  },
  eventsContainer: {
    flex: 1,
  },
});
