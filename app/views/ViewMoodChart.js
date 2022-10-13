import React, { useEffect, useState } from 'react';
import { View, Image, Text, Button, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import happy from '../assets/Images/happy.png';
import sad from '../assets/Images/sad.png';
import angry from '../assets/Images/angry.png';
import fear from '../assets/Images/fear.png';
import confused from '../assets/Images/confused.png';
import guilty from '../assets/Images/guilty.png';
import worry from '../assets/Images/worry.png';
import stressed from '../assets/Images/stressed.png';
import DbService from '../Services/DbService';
import moment from 'moment';


const Dashboard = ({ navigation,route }) => {
    const { params } = route
    const { uid } = params
    const [allData, setallData] = useState([])

    let images = {
        Happy: happy,
        Sad: sad,
        Angry: angry,
        Fear: fear,
        Confused: confused,
        Guilty: guilty,
        Worry: worry,
        Stressed: stressed,
    }

    useEffect(() => {
        _runDB()
    }, []);

    const _runDB = async () => {
        let temp = []
        let query = "SELECT * FROM DailyChart Where UserId=='" + uid + "'"
        console.log(query)
        const dbservice = new DbService();
        let selectQuery = await dbservice.ExecuteQuery(query, []);
        let rows = selectQuery.rows;
        for (let i = 0; i < rows.length; i++) {
            var item = rows.item(i);
            temp.push(item);
        }
        setallData(temp)
        temp.reverse()
    }

  
    const _handleRenderChart = ({ item, index }) => {
        

        return (
            <View style={{ flex: 1, margin: 10,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"#0002",padding:20,borderRadius:10,margin:10}}>
                <Text style={{ fontSize: 18, fontWeight: "bold", flex:1  }}>{moment(item.Day,"YYYY-MM-DD").format("ddd  DD-MM-YYYY ") }</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold",  }}>{item.mood}</Text>
                <Image source={images[item.mood]} style={{ width: 35, height: 35,marginLeft:10, resizeMode: "contain",}}></Image>
            </View>

        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#dbfbff", flex: 1 }}>
              <View style={{ alignSelf: "stretch", }}>
                    <FlatList
                        data={allData}
                        renderItem={_handleRenderChart}
                    />
                </View>
        </SafeAreaView>
    );
};



export default Dashboard