import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../assets/css/style";
import DbService from '../Services/DbService';
import Bg from '../assets/Images/Bg.png';
import ButtonMain from "../components/ButtonMain";
import loginImg from '../assets/Images/loginImg.png';
import ApplicationServices from '../Services/ApplicationServices'

const Login = ({ navigation }) => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
    //check login method
  const checkLogin = async () => {
    if (email == "") alert("Enter your email") //checks for input, error displayed
    else if (password == "") alert("Enter your password") //checks for input, error displayed
    else {
      let query = "SELECT * FROM User WHERE Email=='" + email.toLowerCase() + "'" 
      //checks email if valid in database

      const dbservice = new DbService(); 

      let selectQuery = await dbservice.ExecuteQuery(query, []); //executes query
      let rows = selectQuery.rows;  //rows are selected from query
      let temp = [];   //empty array

      for (let i = 0; i < rows.length; i++) { //for loop iterates continuously
        var item = rows.item(i); //stores
        temp.push(item);   //adds to array
      }
      if (temp.length > 0) {
        let pass = temp[0].Password  
        if (pass == password) {    //checks if correct password
          let data = temp[0]
          const storage = new ApplicationServices()
          await storage.storeLoginData(data.Name,data.UserId,data.Universty)
              //if pass correct, store users data
          alert("Login Successfull") //users is logged in
          navigation.reset({
            index: 0,
            routes: [{ name: 'MainDrawer' }]
          })
        } else {
          alert("Password Incorrect")  //error
        }
      }
      else {
        alert("Email Not Found") //error
      }
    }

  }

  return (
        <ScrollView>
    <ImageBackground source={Bg} style={[styles.bgBody]}>

      <View></View>
      <View>
        <Text style={[styles.heading, { textAlign: "center" }]}> Welcome BACK! </Text>
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
          placeholder="Enter your Password"

        />

        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={[styles.textColoured]}> Forget Your Password ? </Text>
        </TouchableOpacity>
      </View>
      <View>

        <ButtonMain
          text="Login"
          onPress={() => checkLogin()} />

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
          <Text style={{ textAlign: "center", alignItems: "center" }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: "#4e8c9f", marginLeft: 8, fontWeight: "bold", }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
    </ScrollView>

  );
};



export default Login

