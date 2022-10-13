import { useIsFocused } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../assets/css/style";
import ButtonMain from "../components/ButtonMain";
import Menu from "../components/Menu";
import ApplicationServices from "../Services/ApplicationServices";
import DbService from "../Services/DbService";

const Create = ({ navigation }) => {

    const isfocused=useIsFocused()

    const [detail, setDetail] = useState(false)
    const [data, setAllData] = useState([])
       const [refresh, setrefresh] = useState(false)

    useEffect(() => {
        _uDetail()
    }, []);

    useEffect(() => {
        if (detail) _runDB()
    }, [detail,isfocused]);


    const _uDetail = async () => {
        try {
            let appService = new ApplicationServices()
            let res = await appService.getUserDetail()
            setDetail(res)
        } catch (error) {
            console.log(error)
        }
    }

    const _runDB = async () => {
        let query = "SELECT * FROM Gratitude WHERE UserId=='" + detail.uid + "'"
        const dbservice = new DbService();
        let selectQuery = await dbservice.ExecuteQuery(query, []);
        let rows = selectQuery.rows;
        let temp = [];
        for (let i = 0; i < rows.length ; i++) {
            var item = rows.item(i);
            temp.push(item);
        }
        temp.reverse()
       let newarray=  temp.slice(0,3)
        setAllData(newarray)
        setrefresh(!refresh)

    }


    const renderItem = ({item}) => {

        
        return (
            <View style={styles.roundCard}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={[styles.text, { color: "#000", fontWeight: "bold" }]}>{moment(item.Date,"YYYY-MM-DD HH:MM:SS").format('dddd DD/MM/YYYY')}</Text>
                <Text style={[styles.text, { color: "#000", fontWeight: "bold" }]}>{item.Type}</Text>
                </View>
                <Text style={{ color: "#000", fontSize: 15, margin: 5 }}>{item.Comments}</Text>
            </View>)
    }

    return (
        
        <SafeAreaView style={{ backgroundColor: "#dbfbff", flex: 1, padding: 20 }}> 
     <ScrollView> 
           <Menu />
           
            <Text style={styles.heading}>Gratitude/Thoughts Journal</Text> 
            <Text style={styles.text}> 'Positivity always wins...'</Text>

                         
            <View style={styles.roundCardColoured}>  
                <Text style={{ fontSize: 20, padding: 10, }} > 
                    What are you grateful for today?        
                </Text>          
                <TouchableOpacity
                    style={{ backgroundColor: "#51aeca", height: 30, margin: 5, width: 150, borderRadius: 20, }}
                    onPress={() => navigation.navigate('Entry', { type: "Gratitude" })} >
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 15, margin: 5 }}>
                        Add gratitude note
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.roundCardColoured}>
                <Text style={{ fontSize: 20, padding: 10, }} >
                    What thoughts are on your mind today?
                </Text>
                <TouchableOpacity
                    style={{ backgroundColor: "#51aeca", height: 30, margin: 5, width: 150, borderRadius: 20, }}
                    onPress={() => navigation.navigate('Entry', { type: "Thoughts" })} >
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 15, margin: 5 }}>
                        Add thought note
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                <Text style={{ color: "#4e8c9f", fontWeight: "bold" }}> Previous Entries</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ViewAll")}>
                    <Text style={{ color: "#4e8c9f" }}> View all </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                extraData={refresh}
            />

            <ButtonMain
                text={"Explore calendar"}
                onPress={() => navigation.navigate('Calender')}
            />
            </ScrollView>
        </SafeAreaView>
    );
};


export default Create

