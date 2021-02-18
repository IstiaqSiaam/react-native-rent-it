import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import PostScreen from "./src/screens/PostScreen";
import ItemScreen from "./src/screens/ItemScreen";
import AddProduct from './src/screens/AddProduct';

import * as firebase from 'firebase';

import ProfileScreen from "./src/screens/ProfileScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import NotificationScreen from "./src/screens/NotificationScreen";
import ItemDetails from "./src/screens/ItemDetails";

const HomeStack = createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator();
const AppDrawer = createDrawerNavigator();
const AuthStack = createStackNavigator();
const ItemStack=createStackNavigator();

var firebaseConfig = {
  apiKey: "AIzaSyBMx2IxmTrVJ44wRUgftCn-CuXZ1hhyLz4",
  authDomain: "rent-it-62a78.firebaseapp.com",
  projectId: "rent-it-62a78",
  storageBucket: "rent-it-62a78.appspot.com",
  messagingSenderId: "323104612407",
  appId: "1:323104612407:web:fdaec7d84ae023e5619fb2"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      ></HomeStack.Screen>
      <HomeStack.Screen
      name="Item"
      component={ItemScreen}
      options={{headerShown: false}}
      >
      </HomeStack.Screen>
      <HomeStack.Screen name="Item Details" component={ItemDetails}/>
      <HomeStack.Screen name="Add Product" component={AddProduct}/>
    </HomeStack.Navigator>
  );
};

//const ItemStackScreen=()=>{
//  return(
//    <ItemStack.Navigator>
//      <ItemStack.Screen name="Home" component={HomeScreen}/>
//      <ItemStack.Screen name="Item" component={ItemScreen}/>
//      <ItemStack.Screen name="Item Details" component={ItemDetails}/>
//    </ItemStack.Navigator>
//  );
//}

const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen
        name="Home"
        component={HomeTabSrceen}
      ></AppDrawer.Screen>
      <AppDrawer.Screen
        name="Profile"
        component={ProfileScreen}
      ></AppDrawer.Screen>
    </AppDrawer.Navigator>
  );
};

const HomeTabSrceen = () => {
  return (
    <HomeTab.Navigator initialRouteName="Home">
      <HomeTab.Screen
        name="Home"
        component={HomeStackScreen}
        tabBarIcon={<AntDesign name="home" size={24} color="black" />}
        
      ></HomeTab.Screen>
      <HomeTab.Screen
        name="Cart"
        component={NotificationScreen}
      ></HomeTab.Screen>
    </HomeTab.Navigator>
  );
};
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.isLoggedIN ? (
              <AppDrawerScreen></AppDrawerScreen>
            ) : (
              <AuthStackScreen></AuthStackScreen>
            )}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
