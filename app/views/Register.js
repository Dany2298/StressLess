import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../assets/css/style';
import ButtonMain from '../components/ButtonMain';
import DbService from '../Services/DbService';
import Bg from '../assets/Images/Bg.png';



const Home = ({ navigation }) => {

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conformpassword, setconformpassword] = useState("");
  const [universty, setuniversty] = useState("");
//variables are set to empty strings

  const check = async () => {     //checking method using async
    try{                 //try statement  
    if (fullname == "") alert("Enter your name")
    else if (email == "") alert("Enter your email")
    else if (password == "") alert("Enter your password")
    else if (conformpassword == "") alert("Enter your confirm password")
    else if (password != conformpassword) alert("Password not matched")
    else if (universty == "") alert("Enter your universty")
    else {
       console.log("iam in")
      //conditional if statements to validate users register
      //query to the database (select)
      let query = "SELECT * FROM User WHERE Email=='" + email.toLowerCase() + "'"
      const dbservice = new DbService(); 
      let selectQuery = await dbservice.ExecuteQuery(query, []);
      let rows = selectQuery.rows;
      console.log(rows.length)    
      if (rows.length > 1) {  //if statement to check if email exists
        alert("Email Already Exist")  //error appears
      } else {
        console.log("all fields entered")
        let values = "('" + email.toLowerCase() + "','" + password + "','" + 
        universty + "','" + fullname + "')"
        let query = "INSERT INTO User (Email,Password,Universty,Name) VALUES" + values
        //insert the users details into db
        try {
          let res = await dbservice.ExecuteQuery(query, []);
           
          if (res.rowsAffected) { 
            alert("Sign Up Successfull") //alert successful message will pop up
            navigation.navigate('Login') //login screen
          }                        
        } catch (error) {
          console.log("error")   
        }
      }
    }}
    catch (error) {
          console.log(error)
        }
  }

  const localDatabase = async () => {
    const dbservice = new DbService();
    let query = 'SELECT * FROM User';
    let selectQuery = await dbservice.ExecuteQuery(query, []);
    var rows = selectQuery.rows;
    var temp = [];

    for (let i = 0; i < rows.length; i++) {
      var item = rows.item(i);
    }

  };

  return (
    <ScrollView>
    <ImageBackground source={Bg} style={[styles.bgBody]}>
      <View></View>
      <View>
        <Text style={[styles.heading, { textAlign: "center" }]}> Welcome onboard! </Text>
        <Text style={[styles.text, { textAlign: "center" }]}>Time to register and manage your stress</Text>
        <TextInput
          style={styles.input}
          onChangeText={setfullname} assa
          placeholder="Enter your Full Name"

        />
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
        <TextInput
          style={styles.input}
          onChangeText={setconformpassword}
          placeholder="Confirm your Password"

        />
        <TextInput
          style={styles.input}
          onChangeText={setuniversty}
          placeholder="Which Universty do you attend?"

        />
      </View>
      <View>

        <ButtonMain
          text="Register"
          onPress={() => check()} />

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
          <Text style={{ textAlign: "center", alignItems: "center" }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: "#4e8c9f", marginLeft: 8, fontWeight: "bold", }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    </ScrollView>
  );
};

export default Home