import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
const HomeScreen = () => {
  const data = [
    {
      id: 1,
      image:
        "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/m190-wireless-mouse/m190-wireless-mouse-charcoal-gallery-01.png?v=1",
      name: "Logitech Black",
      price: "230,000",
      description: "gaihaltai mouse baina shuu",
    },
    {
      id: 2,
      image:
        "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/m190-wireless-mouse/m190-wireless-mouse-red-gallery-01.png?v=1",
      name: "Logitech Dragon",
      price: "200,000",
      description: "gaihaltai mouse baina shuu",
    },
    {
      id: 3,
      image:
        "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/m190-wireless-mouse/m190-wireless-mouse-blue-gallery-01.png?v=1",
      name: "LogiTech Blue",
      price: "200,000",
      description: "gaihaltai mouse baina shuu",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/8189uwDnMkL.jpg",
      name: "Razer g1369",
      price: "200,000",
      description: "gaihaltai mouse baina shuu",
    },
    {
      id: 5,
      image:
        "https://assets2.razerzone.com/images/pnx.assets/62dd52710c7316e57f1107a6d8a0a14d/razer-basilisk-v3-pro.png",
      name: "Razer Aav",
      price: "200,000",
      description: "gaihaltai mouse baina shuu",
    },
    {
      id: 6,
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6384/6384932_sd.jpg",
      name: "Razer Eej",
      price: "200,000",
      description: "gaihaltai mouse baina shuu",
    },
    {
      id: 7,
      image:
        "https://www.sony.co.uk/image/8e9c744fc3f2057ccd0b76d1e4b1c8ea?fmt=png-alpha&resMode=bisharp&wid=384",
      name: "sony headphone",
      price: "500,000",
      description: "gaihaltai chihevch baina shuu",
    },
    {
      id: 8,
      image:
        "https://www.lg.com/us/images/monitors/md07500042/features/MNT-27GN950-11-02-1-Gaming-M.jpg",
      name: "gaming monitor",
      price: "7,000,000",
      description: "gaihaltai monitor baina shuu",
    },
  ];
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <AntDesign name="search1" size={24} color="black" />
        <Image
          source={require("../../assets/now.png")}
          style={{ width: 60, height: 80, resizeMode: "contain" }}
        />
        <Entypo name="home" size={24} color="black" />
      </View>
      <View style={{ borderWidth: 1, borderColor: "#cccccccc", marginVertical:5 }} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                borderWidth: 0.5,
                borderRadius: 10,
                marginTop: 10,
                marginLeft: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 180, height: 180, resizeMode: "contain" }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
                {item.name}
              </Text>
              <Text style={{ fontWeight: "300" }}>{item.price}₮</Text>
              <Text
                style={{ textAlign: "center", width: "80%", fontWeight: "200" }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
        ListFooterComponent={<View style={{ marginBottom: 200 }} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
