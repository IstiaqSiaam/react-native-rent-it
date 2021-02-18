import React from 'react';
import {View,Text,FlatList,TouchableOpacity} from 'react-native';
import {Card,Image} from 'react-native-elements';

const ItemScreen=(props)=>{
  return(
    <View>
      <Text style={{marginTop:"10%"}}>{props.route.params.itemType}</Text>
      <FlatList
        data={props.route.params.items}
        renderItem={(item)=>{
          //console.log("Item Search",item.item)
          return(
            <TouchableOpacity
            onPress={()=>{
              props.navigation.navigate("Item Details",{"item":item.item});
            }}
            >
              <View>
                
                <Card>
                <Image
                  source={{uri:item.item.imageSrc}}
                  style={{height:150}}
                />
                  <Text>
                    {item.item.name}
                  </Text>
                </Card>
              </View>
              
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default ItemScreen;