import moment from "moment";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../assets/css/style";
import ApplicationServices from "../Services/ApplicationServices";
import DbService from "../Services/DbService";

const ViewAll = ({ navigation }) => {

    const [detail, setDetail] = useState(false)
    const [data, setAllData] = useState([])

    useEffect(() => {
        _uDetail()
    }, []);

    useEffect(() => {
        if (detail) _runDB()
    }, [detail]);


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
        for (let i = 0; i < rows.length; i++) {
            var item = rows.item(i);
            temp.push(item);
        }
         temp.reverse()
        setAllData(temp)
    }


    const renderItem = ({item}) => {

        console.log(item.Date)
        
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
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};


export default ViewAll

