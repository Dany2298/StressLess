import moment from "moment";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../assets/css/style";
import ButtonMain from "../components/ButtonMain";
import Menu from "../components/Menu";
import ApplicationServices from "../Services/ApplicationServices";
import DbService from "../Services/DbService";

const Entry = ({ navigation, route }) => {

    const { params } = route //parameter
    const { type } = params  //value 

    const [text,setText]=useState("") //set states
    const [detail, setDetail] = useState(false)


    useEffect(() => { 
        _uDetail()  //runs function
    }, []);

    const _uDetail = async () => {
        try {
            let appService = new ApplicationServices() //instance of app services
            let res = await appService.getUserDetail()  //get user detail method
            setDetail(res) //set result
        } catch (error) {
            console.log(error)
        }
    }

    const check = async () => {

        console.log("iam in") //console logs
    
        if (text == "") alert("Enter Today "+type)  //if input is empty, alert displayed

        else {
          const dbservice = new DbService();

            let values = "('" + detail?.uid + "','0','" +  
            moment().format("YYYY-MM-DD HH:MM:SS") + "','" + text + "','" + type + "')"
            let query = "INSERT INTO Gratitude (UserId,Like,Date,Comments,Type) VALUES" + values 
                    //insert query into gratitude row
            try {
              let res = await dbservice.ExecuteQuery(query, []); //execute query
              
              if (res.rowsAffected) {
                setText("") 
                alert("Added Successfull") //alert when users input in successful
                navigation.navigate("Create") //back to journal
              }
            } catch (error) {
              console.log("error")
            }
          
        }
    
      }

    return (

        <SafeAreaView style={{ backgroundColor: "#dbfbff", flex: 1, padding: 20 }}>
          <ScrollView>
           <Menu />
           
            <Text style={styles.heading}>{type} Journal</Text>
            <Text style={[styles.text, { color: "#3F8094", fontWeight: "bold" }]}>{moment().format('dddd DD/MM/YYYY')}</Text>
            <Text style={[styles.heading]}>What are you {type == "Gratitude" ? "grateful" : "thoughts"} for today?</Text>

            <TextInput
            value={text}
                style={[styles.inputLong]}
                onChangeText={setText}
                multiline
                numberOfLines={20}
            />

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity 
                onPress={()=>check()}
                style={[styles.buttonSecond, { marginBottom: 0 }]}>
                    <Text style={[styles.buttonSndText]}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonSecond]}>
                    <Text style={[styles.buttonSndText]}>Delete</Text>
                </TouchableOpacity>
            </View>

            <ButtonMain
                text={"Explore Calendar"}
                onPress={() => navigation.navigate('Calender')}
            />

</ScrollView>
        </SafeAreaView>



    );
};


export default Entry

