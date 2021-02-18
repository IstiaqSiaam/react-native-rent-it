import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  AsyncStorage,
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Card, Button, Input, Header, Image } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import { PostCard } from "../components/PostCard";

const DATA = [
  {
    id: "1",
    title: "Vehicles",
    itemList: [
      {
        name: "Bicycle",
        price: 100,
        imageSrc:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iksKg0.jBhHk/v1/1000x-1.jpg",
      },
      {
        name: "Car",
        price: 200,
        imageSrc:
          "https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364",
      },
      {
        name: "Bike",
        price: 150,
        imageSrc:
          "https://media.zigcdn.com/media/model/2020/Mar/yamaha-yzf-r15-v3-right-side-view_270x180.jpg",
      },
    ],
    imageSrc:
      "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",
  },
  {
    id: "2",
    title: "Home Appliances",
    itemList: [
      { name: "Rice cooker", price: 100, imageSrc: "https://electromart.com.bd/wp-content/uploads/2020/07/rice-cooker6.jpg" },
      { name: "Oven", price: 200, imageSrc: "https://images-na.ssl-images-amazon.com/images/I/618O0ywM1SL._SL1000_.jpg" },
      { name: "Room heater", price: 150, imageSrc: "https://5.imimg.com/data5/KC/RT/MY-8540351/room-heater-500x500.jpeg" },
    ],
    imageSrc:
      "https://en.corporatenews.com.bd/wp-content/uploads/2018/11/marcel-corporatenews-eng-650x360.png",
  },
  {
    id: "3",
    title: "Event Decors",
    itemList: [
      { name: "Chair", price: 100, imageSrc: "https://www.barkerandstonehouse.co.uk/images/swatchzoom/TWYFCHAIYELL_1_Zoom.jpg" },
      { name: "Chandelier", price: 200, imageSrc: "https://www.czechchandeliers.com/image/s/1920x1200/shrink/storage/gallery/39/45e323/original/zl57001-blu-n01-08-1or2.jpg" },
      { name: "Attire", price: 150, imageSrc: "https://4.imimg.com/data4/AV/SY/MY-10112154/designer-wedding-sherwani-500x500.jpg" },
    ],
    imageSrc:
      "https://ogavenue.com.ng/blog/wp-content/uploads/2019/01/Radisson-2-760x490.jpg",
  },
  {
    id: "4",
    title: "Travel Accessories",
    itemList: [
      { name: "Tent", price: 100, imageSrc: "https://www.rei.com/media/3ee1090b-fb1d-406e-9ba7-9bc5b0cec97d?size=784x588" },
      { name: "Travel Bag", price: 200, imageSrc: "https://eorder.com.bd/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/a/n/anx03.jpg" },
      { name: "Knife", price: 150, imageSrc: "https://www.theperfectsteak.com.au/wp-content/uploads/2019/05/Ironstone-Chef-Knives-1.jpg" },
    ],
    imageSrc:
      "https://www.travelaxs.com/wp-content/uploads/2017/12/travel-accessories.jpg",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const HomeScreen = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#2f4a34" : "#69d17c";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

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
            centerComponent={{ text: "Rent-It", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              title: "Log out",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          ></Header>
          <FlatList
            data={DATA}
            renderItem={(item) => {
              //console.log(item);
              return (
                <View>
                  <Card>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("Item", {
                          itemType: item.item.title,
                          items: item.item.itemList,
                        });
                      }}
                    >
                      <Image
                        source={{ uri: item.item.imageSrc }}
                        style={{ height: 150 }}
                      />
                      <Text>{item.item.title}</Text>
                    </TouchableOpacity>
                  </Card>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
