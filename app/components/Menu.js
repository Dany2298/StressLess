
import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import menu from '../assets/Images/menu.png'
import styles from '../assets/css/style';
import { useNavigation } from '@react-navigation/native';



const Menu = ({text,onPress}) => {
 const navigation = useNavigation()
  return (<TouchableOpacity 
  onPress={()=>{navigation.openDrawer()}}
  style={{width:"100%",height:30,marginBottom:10}}>
    <Image source={menu} style={{height:30,width:30,resizeMode:"contain"}} />
  </TouchableOpacity>);
} 

export default Menu