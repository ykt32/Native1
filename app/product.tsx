import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function product() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      
      }}
    >
      <Text>Product Screen</Text>
      <Link href="/(tabs)">Go To Tabs</Link>
    </View>
  );
}
