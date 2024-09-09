import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Cart() {
  return (
    <View style={{ flexDirection: "row"}}>
      <Ionicons name="cart-outline" size={28} color="black" />
      <View style={styles.container}>
        <Text style={styles.budge}>13</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -10,
    marginTop: -4,
  },
  budge: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
