import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";
import { categories, products } from "@/data";

import Cart from "@/components/shop/Cart";
import Title from "@/components/shop/Title";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import Category from "@/components/shop/Category";
import Product from "@/components/shop/Product";

export default function HomeScreen() {
  const { height } = Dimensions.get("window");
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <SafeAreaView style={{ minHeight: height, borderColor: "#ffffff" }}>
      <View style={styles.container}>
        <Pressable>
          <Image
            style={styles.image}
            source={require("@/assets/images/shop/n.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </Pressable>

        <Pressable>
          <Cart />
        </Pressable>
      </View>

      <Image
        style={styles.banner}
        source={require("@/assets/images/shop/banner6.png")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Pressable>
        <View style={{ marginLeft: 20 }}>
          <Title title="Shop By Category" action="See All" />
          <FlashList
            data={categories}
            horizontal
            renderItem={({ item }) => <Category {...item} />}
            estimatedItemSize={55}
            //delete indicator line
            showsHorizontalScrollIndicator={false}
          />
          <Text>{""}</Text>
          <Title title="Recommened For You " action="See All" />
          <FlashList
            data={products.manShirt}
            horizontal
            renderItem={({ item }) => <Product {...item} />}
            estimatedItemSize={55}
            //delete indicator line
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
  },

  image: {
    width: 50,
    height: 25,
    marginLeft: 15,
  },

  banner: {
    width: "100%",
    //for responsive
    aspectRatio: 20 / 9,
    marginTop: 10,
  },
});
