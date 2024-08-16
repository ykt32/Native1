import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
      }}
    >
      <Link href="/about">Go to About</Link>
    </View>
  );
}
