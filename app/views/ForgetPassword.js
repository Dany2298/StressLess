import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../assets/css/style";
import DbService from '../Services/DbService';
import Bg from '../assets/Images/Bg.png';
import ButtonMain from "../components/ButtonMain";
import loginImg from '../assets/Images/loginImg.png';
import { ScrollView } from "react-native-gesture-handler";

const Login = ({ navigation }) => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Cpassword, setCpassword] = useState("");

  const checkLogin = async () => {
    if (email == "") alert("Enter your email")
    else if (password == "") alert("Enter your password")
    else if (password != Cpassword) alert("Password not matched")
    else {
      let query = "Update User set Password ='" + password + "' WHERE Email=='" + email + "'"


      const dbservice = new DbService();
      try {
        let res = await dbservice.ExecuteQuery(query, []);
        if (res.rowseffected)
          Alert.alert("Password Reset Successfull")
        navigation.navigate('Login')
      } catch (error) {
        console.log(error)
      }
    }

  }

  return (
    
    <ImageBackground source={Bg} style={[styles.bgBody]}>
      <View></View>
      <ScrollView>
      <View>
        <Text style={[styles.heading, { textAlign: "center" }]}> Forget Password! </Text>
        <View style={styles.imageMainCont} >
          <Image source={loginImg} style={styles.imageMain} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setemail}
          placeholder="Enter your Email"

        />
        <TextInput
          style={styles.input}
          onChangeText={setpassword}
          placeholder="Enter New Password"

        />
        <TextInput
          style={styles.input}
          onChangeText={setCpassword}
          placeholder="Confirm New Password"

        />


      </View>
      <View>

        <ButtonMain
          text="Forget"
          onPress={() => checkLogin()} />


      </View>
</ScrollView>
    </ImageBackground>

  );
};



export default Login

