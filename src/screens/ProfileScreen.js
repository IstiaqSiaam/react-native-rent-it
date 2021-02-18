import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Avatar, Header } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Header
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{ text: "Profile", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          />
          <Card>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                size={250}
                containerStyle={{
                  backgroundColor: "#8fe5ff",
                  flex: 1,
                  marginLeft: 0,
                  marginTop: 0,
                }}
                rounded
                icon={{ name: "user", type: "font-awesome", color: "white" }}
                activeOpacity={1}
              />
            </View>
            <Text style={styles.textStyle}>{"\n"}{"\n"} {auth.currentUser.name} {"\n"}</Text>
            <Text style={styles.textStyle2}>
              Vendor ID: {auth.currentUser.sID} 
              {"\n"}{"\n"}
              Email: {auth.currentUser.email}
              {"\n"}
            </Text>
           
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    color: "#8fe5ff",
    alignSelf: "center",
  },
  textStyle2: {
    fontSize: 30,
    color: "#8fe5ff",
  },
  viewStyle: {
    flex: 1,
  },
});

export default ProfileScreen;
