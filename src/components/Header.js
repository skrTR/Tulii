import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ isBack }) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          marginTop: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        {isBack ? (
          <AntDesign
            name="left"
            size={25}
            color="black"
            onPress={() => navigation.goBack()}
          />
        ) : (
          <AntDesign name="search1" size={25} color="black" />
        )}
        <Image
          source={require("../../assets/shizuku.png")}
          style={{ width: 50, height: 50, resizeMode: "contain" }}
        />
        <Ionicons name="notifications" size={28} color="black" />
      </View>
      <View
        style={{ borderWidth: 1, borderColor: "#cccccccc", marginVertical: 10 }}
      />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
