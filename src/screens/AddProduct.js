import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';
import {Input} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

const AddProduct=(props)=>{
    const [productCategory,setProductCategory]=useState('');
    const [productType,setProductType]=useState('');
    const [productName,setProductName]=useState('');
    const [productPrice,setProductPrice]=useState(0);
    const [productImage,setProductImage]=useState('');

    const types={
        'Vehicle':[
            {label:'Bicycle', value: 'Bicycle'},
            {label:'Car', value: 'Car'},
            {label:'Bike', value: 'Bike'},
        ],
        'Home Appliances':[
            {label:'AP 1', value: 'AP 1'},
            {label:'AP 2', value: 'AP 2'},
            {label:'AP 3', value: 'AP 3'},
        ]
    }

    const [selectedTypes,setSelectedTypes]=useState([]);

    return(
        <View>
            <Text> </Text>
            <RNPickerSelect
                items={
                    [
                        {label:'Vehicle', value:'Vehicle'},
                        {label:'Home Appliances', value:'Home Appliances'}
                    ]
                }
                onValueChange={(value)=>{
                    setProductCategory(value);
                    setSelectedTypes(types[value])
                    console.log(selectedTypes);
                }}
            >
                <Text>Category {productCategory}</Text>
            </RNPickerSelect>

            <Text> </Text>

            <RNPickerSelect
                items={
                    selectedTypes
                }
                onValueChange={(value)=>{
                    setProductType(value);
                }}
            >
                <Text>Type: {productType}</Text>
            </RNPickerSelect>
            
            <Input
            placeholder="Name of this product"
            onChangeText={(currentInput)=>{
                setProductName(currentInput);
            }}
            />
            <Input
            placeholder="Price"
            onChangeText={(currentInput)=>{
                setProductPrice(currentInput);
            }}
            />
            <Button
            title="Save this product"
            onPress={()=>{
                console.log(productCategory,productType,productName,productPrice)
            }}
            />

        </View>
    );
}

export default AddProduct;