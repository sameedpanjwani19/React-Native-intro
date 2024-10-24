import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
          }}
        >
          Hello world
        </Text>
      </View>
    </>
  );
};

export default Home;
