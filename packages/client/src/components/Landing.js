import React from "react";
import { Image, Text, View } from "react-native";
import UserList from "./UserList";

const Landing = () => (
  <View className="App">
    <View className="App-header">
      <Image
        source={process.env.PUBLIC_URL + "/img/grandstack.png"}
        className="App-logo"
        alt="logo"
      />
      <Text className="App-title">Welcome to GRAND Native Web Stack</Text>

      <UserList />
    </View>
  </View>
);

export default Landing;
