import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Category({
  id,
  name,
  image,
}: {
  id: number;
  name: string;
  image: any;
}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginRight:30
  },

  image: {
    width: 55,
    height: 55,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
});
