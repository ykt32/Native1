import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";
import { categories, products } from "@/data";
import { StatusBar } from "expo-status-bar";
import { useScrollToTop } from "@react-navigation/native";

//redux
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setProduct } from "@/providers/redux/productSlice";

import Cart from "@/components/shop/Cart";
import Title from "@/components/shop/Title";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import Category from "@/components/shop/Category";
import Product from "@/components/shop/Product";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const { height } = Dimensions.get("window");
  const [select, setSelect] = useState("Men");
  //for heart click
  const [date, setData] = useState(products);
  //for Scroll Ref
  const scrollRef = useRef<ScrollView>(null);
  useScrollToTop(scrollRef);
  const route = useRouter();

  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const onSelectHandler = (name: string) => {
    setSelect(name);
  };

  const onPressToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  //For cart to go detail Screen
  const saveProductToRedux = (item: any) => {
    dispatch(setProduct(item));
    route.navigate("/detail");
  };

  // //for saveProduct To store
  // const saveProductToRedux = (item: any) => {
  //   dispatch(setProduct(item));

  //   //go to detail and then take product cart at store
  //   route.navigate("/detail");
  // };

  return (
    <SafeAreaView style={{ minHeight: height, borderColor: "#ffffff" }}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <Pressable onPress={onPressToTop}>
          <Image
            style={styles.image}
            source={require("@/assets/images/shop/n.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </Pressable>

        <Pressable onPress={() => route.navigate("/cart")}>
          <Cart />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
        <Image
          style={styles.banner}
          source={require("@/assets/images/shop/banner6.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />

        <View style={{ marginLeft: 20 }}>
          <Title title="Show By Category" action="See All" />
          <FlashList
            data={categories}
            extraData={select}
            horizontal
            renderItem={({ item }) => (
              <Category {...item} onSelect={onSelectHandler} select={select} />
            )}
            estimatedItemSize={80}
            showsHorizontalScrollIndicator={false}
          />
          <Text>{""}</Text>
          <Title title="Recommened For You " action="See All" />
          <FlashList
            data={date[select as keyof typeof date]}
            //Rerender
            extraData={select}
            horizontal
            renderItem={({ item }) => (
              <Product {...item} onCall={() => saveProductToRedux(item)} />
            )}
            estimatedItemSize={55}
            //delete indicator line
            showsHorizontalScrollIndicator={false}
          />
          <Title title="Popular List for you " action="See All" />
          <FlashList
            data={date[select as keyof typeof date]}
            extraData={select}
            horizontal
            renderItem={({ item }) => (
              <Product {...item} onCall={() => saveProductToRedux(item)} />
            )}
            estimatedItemSize={55}
            //delete indicator line
            showsHorizontalScrollIndicator={false}
          />
          <View style={{ marginBottom: 100 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
  },
});
