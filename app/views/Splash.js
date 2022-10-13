
import React, { useEffect } from 'react';
import { View, Image, Text, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../assets/css/style';
import Bg from '../assets/Images/Bg.png';
import SplashImg from '../assets/Images/splash.png';
import ButtonMain from '../components/ButtonMain';
import ApplicationServices from '../Services/ApplicationServices';
import DbService from '../Services/DbService';




const Splash = ({ navigation }) => {

  useEffect(() => {
    _runDB()
  }, []);


  const _runDB = async () => {
    try {
      let appService = new ApplicationServices()
      let res =await appService.getUserName()
      console.log(res)
      if (res) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainDrawer' }]
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  function reset(params) {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Register' }]
    })
  }

  return (
    <ImageBackground source={Bg} style={[styles.bgBody]}>
      <View></View>
      <View>
        <View style={styles.imageMainCont} >
          <Image source={SplashImg} style={styles.imageMain} />
        </View>
        <Text style={styles.heading}>Manage your stress with StressLess</Text>
        <Text style={styles.text}>During higher education, a vast majority of students at some point will face stress yet not know how to manage their stress. </Text>
        <Text style={styles.text}>StressLess will support your needs with mood tracking, access to a personal calendar and a brilliant community.  </Text>
      </View>
      <ButtonMain
        text="Register"
        onPress={() => reset()} />

    </ImageBackground>
  );
};


export default Splash