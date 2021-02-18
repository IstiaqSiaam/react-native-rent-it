import React from 'react';
import {View,Text,TouchableOpacity,FlatList,Button} from 'react-native';
import {Card} from 'react-native-elements';
import {AuthContext} from './../providers/AuthProvider';

const ItemDetails=(props)=>{
    console.log("Item details,",props);
  return(
    <AuthContext.Consumer>
        {(auth)=>(
            <View>
            <Text>Item Details</Text>
            <Text>Name: {props.route.params.item.name}</Text>
            <Text>Price: {props.route.params.item.price} per day</Text>
            {
              auth.currentUser["d_"]["Zf"]["gt"]["proto"]["mapValue"]["fields"]["userType"]["stringValue"]== "vendor" ? (
              //1==1?(
                <View>
                  <Button
                    title="Add new product"
                    onPress={()=>{
                      //console.log("Current user:",auth.currentUser["d_"]["Zf"]["gt"]["proto"]["mapValue"]["fields"]["userType"]["stringValue"])
                      props.navigation.navigate("Add Product");
                    }}
                  />
                </View>
              ):(
                <View>
                  <Button
                    title="Rent it"
                  />
                </View>
              )
            }
        </View>
        )}
    </AuthContext.Consumer>
  );
}

export default ItemDetails;