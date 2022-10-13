import React, { useEffect, useState } from 'react';
import { View, Image, Text, Button, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../assets/css/style';
import Profile from '../assets/Images/Profile.jpeg';
import bgDash from '../assets/Images/bgDash.png';
import happy from '../assets/Images/happy.png';
import sad from '../assets/Images/sad.png';
import angry from '../assets/Images/angry.png';
import fear from '../assets/Images/fear.png';
import confused from '../assets/Images/confused.png';
import guilty from '../assets/Images/guilty.png';
import worry from '../assets/Images/worry.png';
import stressed from '../assets/Images/stressed.png';
import ButtonMain from '../components/ButtonMain';
import ApplicationServices from '../Services/ApplicationServices';
import DbService from '../Services/DbService';
import moment from 'moment';
import { set } from 'react-native-reanimated';
import Menu from '../components/Menu';


const Dashboard = ({ navigation }) => {
        //setting states to false
    const [detail, setDetail] = useState(false)
    const [allData, setallData] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [mood, setMood] = useState('')
    const [startOfWeek, setstartOfWeek] = useState(moment().startOf('week').format("YYYY-MM-DD"))
    const [endOfWeek, setendOfWeek] = useState(moment().endOf('week').format("YYYY-MM-DD"))
        //mood is set to an empty string to store users moods

    let images = {    //library of mood images
        Happy: happy,
        Sad: sad,
        Angry: angry,
        Fear: fear,
        Confused: confused,
        Guilty: guilty,
        Worry: worry,
        Stressed: stressed,
    }

    let data = [        //creating a variable and assign to array
        { tittle: "Happy", },
        { tittle: "Sad", }, 
        { tittle: "Angry", },  //each property contains a string val
        { tittle: "Fear", },
        { tittle: "Confused", }, 
        { tittle: "Guilty", }, 
        { tittle: "Worry", },
        { tittle: "Stressed", },
    ]

    let data2 = [     //array of objects contains a title
        { tittle: "M", },
        { tittle: "T", },
        { tittle: "W", },
        { tittle: "T", },
        { tittle: "F", },
        { tittle: "S", },
        { tittle: "S", },
    ]


    useEffect(() => {
        _uDetail() //runs udetail function when component mounts.
    }, []);

    useEffect(() => {
        if (detail) _runDB()  //checks detail prop, if set db run
    }, [detail]); 


    const _uDetail = async () => {           
        try {                       //imports appservices from services folder                    
            let appService = new ApplicationServices() //new instance created
            let res = await appService.getUserDetail() //call get method on appservice
            setDetail(res)  //set result of getuserdetail
        } catch (error) {
            console.log(error) //error displayed in console
        }
    }

    const _runDB = async () => {    //run db class using async
        var current = moment().format("YYYY-MM-DD") //setting to the current date
        let query = "SELECT * FROM DailyChart WHERE UserId=='" + detail.uid + "' AND Day =='" + current + "'" //sqlite query to select data from DailyChart table
        const dbservice = new DbService();
        let selectQuery = await dbservice.ExecuteQuery(query, []); //executing query
        let rows = selectQuery.rows; //creating variable rows and setting to select query object
        let temp = [];            //setting to empty array
        for (let i = 0; i < rows.length; i++) { //if length of rows is greater than 0.
            var item = rows.item(i);
            temp.push(item); 
        }
        if (temp.length > 0) setMood(temp[0].mood)  // the mood state is set to value in first row
        _runallDB()
    }

    const _runallDB = async () => {

        let temp = []; //temp array
        for (let i = 0; i < 7; i++) { //loops for 7 days
            let query = "SELECT * FROM DailyChart WHERE UserId=='" + detail.uid + "' AND Day == '" + moment().startOf('week').add(i, 'day').format("YYYY-MM-DD") + "'" //query for each day to select all data that day
            console.log(query) 
            const dbservice = new DbService();
            let selectQuery = await dbservice.ExecuteQuery(query, []); //query is executed adds results to the temp array
            let rows = selectQuery.rows;  //returns rows
            var item = rows.item(0);   //returns first row

            let day = moment().startOf('week').add(i, 'day').format("dd") //variable that sets to current day of week
            day = day[0] 
            temp.push({ tittle: day, image: item?.mood || "" }); //push an object to temp array
        }
        temp.push(temp.shift()); //temp array is pushed to all data
        console.log(temp)
        setallData(temp)  //all data is set to state
        setRefresh(!refresh) //refresh variable set
        
    }

    const _handleMood = async ({ data }) => { //handle mood method using async
        let current = moment().format("YYYY-MM-DD")
        let query = ""
        if (mood) { //if mood is set
            query = "Update DailyChart set mood='" + data + "' Where Day =='" + current + "'" 
            //update mood with new mood
        } else {
            let values = "('" + detail?.uid + "','" + data + "','" + current + "')"
            query = "Insert INTO DailyChart (UserId,mood,Day) VALUES" + values 
            //insert new row in dailychart table
        }
        console.log(query) 
        const dbservice = new DbService();
        await dbservice.ExecuteQuery(query, []);
        setMood(data)
        _runDB()
        _runallDB()
    }

    const _handleRender = ({ item }) => {   //creating a function that takes in a single parameter

        return (
            <TouchableOpacity  //returning component
                onPress={() => _handleMood({ data: item.tittle })} //moods displayed with the titles         
                style={[mood == item?.tittle ? { backgroundColor: "#fff" } : {}, { flex: 1, justifyContent: 
                "center", alignItems: "center", borderRadius: 999, borderWidth: 1.5, padding: 8, margin: 4,         //if the mood is equal to the title,it will change color to white
                borderColor: "#4b879a" }]}>                                     
                <Image source={images[item.tittle]} style={{ width: 35, height: 35, resizeMode: "contain" }}></Image> 
                <Text style={{ fontSize: 13 }}>{item.tittle}</Text> 
            </TouchableOpacity> 
        )
    }

    const _handleRenderChart = ({ item, index }) => {  //creates a chart function that takes in item,index
        let img = allData[index]
        img = img?.image || ""
        return (
            <View style={{ flex: 1, margin: 10, alignItems: "center" }}>
                <View style={{ width: 38, height: 35, backgroundColor: "#8dc5c9", borderRadius: 999, padding: 8, justifyContent: "center", alignItems: "center", marginBottom: 6 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 20 }}>{item.tittle}</Text>
                </View>
                {img != "" ?
                    <Image source={images[img]} style={{ width: 35, height: 45, resizeMode: "contain" }}></Image>
                    :
                    <View style={{ width: 35, height: 35 }}></View>
                }
            </View>
        )
    }

    return (

        <View style={{ backgroundColor: "#dbfbff", flex: 1 }}>
<ScrollView>

            <ImageBackground
                source={bgDash}
                style={{ backgroundColor: "#8dc5c9", justifyContent: "flex-end", alignItems: "center", height: 250, padding: 10 }}>
                <Menu />
                <Image style={{ height: 100, width: 100, borderRadius: 100, }}
                    source={{uri:"https://images.unsplash.com/photo-1643944398479-0fd9eaee5cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"}} />
                <Text style={[styles.heading, { color: "#fff", marginTop: 8, marginBottom: 4 }]}>
                    Hello, {detail?.name}
                </Text>
                <Text style={[styles.text, { marginBottom: 4 }]}> {detail?.uni} University </Text>

            </ImageBackground>
            <View style={{ backgroundColor: "#dbfbff", alignItems: "center", paddingHorizontal: 2, paddingVertical: 10 }}>
                <Text style={styles.heading}>How do you feel today?</Text>

                <View style={{ backgroundColor: "#cef5fd", alignSelf: "stretch", 
                flexDirection: "row", borderRadius: 10, paddingVertical: 10 }}>
                    <FlatList     //flatlist component 
                        data={data}  //data passed in as prop
                        numColumns={4}  //4 columns for moods
                        renderItem={_handleRender}  //render data using handlerender func
                    />
                </View>
                <View style={[styles.buttonSecond]}>
                    <Text style={[styles.buttonSndText]}>
                        Weekly Mood Chart
                    </Text>
                </View>

                <View style={{ alignSelf: "stretch", flexDirection: "row" }}>
                    <FlatList  //flatlist component
                        data={data2}  //calls the array
                        numColumns={7}  //7 columns to define 1 week
                        renderItem={_handleRenderChart} //renders function
                        extraData={refresh} //refreshes 
                    />
                </View>
                
                <View style={[styles.buttonSecond]}>
                    <TouchableOpacity onPress={() => navigation.navigate('ViewMoodChart',{uid:detail.uid})}>
                        <Text style={[styles.buttonSndText]}>
                            View Mood Table
                        </Text>
                    </TouchableOpacity>
                </View>
        
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <ButtonMain
                    text={"Explore Journal"}
                    onPress={() => navigation.navigate('Create')} />
            </View>
</ScrollView>
        </View>
    );
};



export default Dashboard