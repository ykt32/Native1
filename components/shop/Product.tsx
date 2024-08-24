import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type ProdutProp = {
  id: number;
  brand: string;
  title: string;
  star: number;
  quantity: number;
  price: number;
  discount: number;
  image: any;
  favourite: boolean;
};

export default function Product({
  id,
  brand,
  title,
  star,
  quantity,
  price,
  discount,
  image,
  favourite,
}: ProdutProp) {
  return (
    <View style={styles.container}>
      <Pressable>
        <ImageBackground
          source={image}
          style={styles.imageView}
          imageStyle={styles.image}
        >
          <Pressable>
            <View style={styles.heart}>
              <Ionicons name="heart-outline" size={18} color="#E66F2D" />
            </View>
          </Pressable>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 17,
  },

  imageView: {
    width: 200,
    height: 250,
    resizeMode: "cover",
    alignItems: "flex-end",
    marginTop:12,
    marginRight:12
  },

  image: {
    borderRadius: 5,
  },
  heart: {
    backgroundColor: "#00000015",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
