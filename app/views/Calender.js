import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Pressable,
  Modal,
  FlatList
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../assets/css/style";
import ButtonMain from "../components/ButtonMain";
import { Calendar } from 'react-native-calendars'; //import calender native library
import ApplicationServices from "../Services/ApplicationServices";
import DbService from "../Services/DbService";
import moment from "moment"; //import moment
import Menu from "../components/Menu";

const Calender = ({ navigation }) => {

  const [selected, setSelected] = useState(moment().format("YYYY-MM-DD"))
  const [isVisible, setIsVisible] = useState(false)
  const [detail, setDetail] = useState("")
  const [data, setData] = useState("")
  const [refresh, setRefresh] = useState(false) //states are declared

  const [time, setTime] = useState("");
  const [text, setText] = useState(""); 

  useEffect(() => {
    _uDetail()
  }, []);

  useEffect(() => {
    if (detail) _runDB()
  }, [detail, selected]);


  const _uDetail = async () => {
    try {
      let appService = new ApplicationServices() //new instance
      let res = await appService.getUserDetail() //getuserdetail method
      setDetail(res)
    } catch (error) {
      console.log(error)  //display error
    }
  }

  const _runDB = async () => {
    let query = "SELECT * FROM Calender WHERE UserId=='" + 
    detail.uid + "' AND Date =='" + selected + "'" //SELECT query from calendar       //let query = "SELECT * FROM Calender "
  
    const dbservice = new DbService(); //new db service object
    let selectQuery = await dbservice.ExecuteQuery(query, []); //execute query
    let rows = selectQuery.rows; 
    let temp = []; //temp array
    for (let i = 0; i < rows.length; i++) { //for loop
      var item = rows.item(i); 
      temp.push(item);  //push item into array
    }
    setData(temp) //set data to temp array
    setRefresh(!refresh) //refresh true
  }

  const _AddTodo = async () => { //to-do-list function

    console.log("iam in") //console log

    if (time == "") alert("Enter Time") //if user entered no time, alert pops up
    else if (text == "") alert("Enter Text") //if user entered no text, alert pops up

    else {
      const dbservice = new DbService(); //if user enters time&text, a new dbservice is created

      let values = "('" + detail?.uid + "','" + selected + "','" + time + "','" + text + "')"
      let query = "INSERT INTO Calender (UserId,Date,Time,Comments) VALUES" + values
       //new query to insert data into the db
      try {
        let res = await dbservice.ExecuteQuery(query, []); //the query is executed
        if (res.rowsAffected) {   //if query was successful
          alert("Added Successfully") //alert 
          setIsVisible(false) 
          setTime("")
          setText("")
          _runDB() //refresh data
        }
      } catch (error) {
        console.log("error") //error
      }
    }
  }


  const renderItem = ({ item, index }) => {

    
    return (
      <View style={{ flexDirection: "row", alignItems: "flex-start", paddingHorizontal: 20 }}>
        <View style={{ alignItems: "center",}}>
          <View style={{ width: 30, height: 30, borderRadius: 999, backgroundColor: "#4e8c9f", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{index + 1}</Text>
          </View>
          <View style={{ width: 2,  flex: 1, backgroundColor: "#4e8c9f" }}>
          </View>
        </View>
        <View style={{ flex: 1, marginLeft: 10, backgroundColor: "#0002", alignItems: 'stretch', padding: 5, borderRadius: 10, marginBottom: 20 }}>
          <Text style={{ color: "#4e8c9f", fontWeight: "bold", fontSize: 16 }}>{item.Date}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.Comments}</Text>
        </View>
      </View>
    )
  }

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#dbfbff", flex: 1, justifyContent: "space-between" }}>
     <View style={{paddingHorizontal:20}}>
     <Menu />
     </View>
     

        <View style={{ flex: 5 }}>
     
          <Text style={[styles.heading, { paddingHorizontal: 20 }]}>
            Calender
          </Text>

          <Calendar
            style={{
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              paddingBottom: 30,
            }}
            theme={{      //theme
              backgroundColor: '#83B3C0',
              calendarBackground: '#83B3C0',
              textSectionTitleColor: '#fff',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#fff',
              selectedDayTextColor: '#4e8c9f',
              todayTextColor: '#fff',
              dayTextColor: '#fff',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#fff',
              arrowColor: '#fff',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: '#FFF',
              indicatorColor: '#fff',
              textMonthFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
            onDayPress={day => {
              setSelected(day.dateString)
              console.log('selected day', day);
            }}

            onDayLongPress={day => {
              setSelected(day.dateString)
              console.log('selected day', day);
            }}
            hideExtraDays
            monthFormat={'MMM-yyyy'}
            disableAllTouchEventsForDisabledDays={true}
            enableSwipeMonths={true}
            markedDates={{
              [selected]: { selected: true, selectedColor: '#fff' },
            }}

          />

          <Text style={[styles.heading, { padding: 20 }]}>To Do List
          </Text>
<View style={{flex:1,flexGrow:1,paddingBottom:30}}>
          <FlatList
            style={{marginBottom:40}}
            data={data}
            renderItem={renderItem}
            extraData={refresh}
          />
          </View>

        </View>
        <View style={{ position: "absolute", width: "100%", bottom: 1 }}>
          <View style={{ paddingHorizontal: 25 }}>
            <TouchableOpacity
              onPress={() => setIsVisible(true)}
              style={{ width: 60, height: 60, backgroundColor: "#9AE0FF", borderRadius: 9999, justifyContent: "center", alignItems: "center", alignSelf: "flex-end", paddingHorizontal:10, paddingVertical: 10 }}
            >
              <Text style={{ fontSize: 40, fontWeight: "bold", color: "#345C6A", lineHeight: 42 }}>+</Text>
            </TouchableOpacity>

            <ButtonMain
              text={"Explore StressLess Community"}
              onPress={() => navigation.navigate('Collaboration')}
            />
          </View>
        </View>


      </SafeAreaView>
      {isVisible &&
        <Pressable
          onPress={() => setIsVisible(false)}
          style={{ width: "100%", height: "100%", position: "absolute", backgroundColor: "#0007", padding: 20, justifyContent: "center" }}>
          <Pressable
            onPress={() => setIsVisible(true)}
            style={{ backgroundColor: '#83B3C0', borderRadius: 10, padding: 20 }}>
            <Text style={[styles.heading, { textAlign: "center" }]}> Add Todo! </Text>

            <TextInput
              style={styles.input}
              value={time}
              onChangeText={setTime}
              placeholder="Enter Time"

            />
            <TextInput
              style={[styles.input, { height: 150, borderRadius: 20, paddingTop: 20 }]}
              onChangeText={setText}
              value={text}
              multiline
              numberOfLines={4}
              placeholder="Enter Comments"
            />

            <ButtonMain
              text={"Add"}
              onPress={() => _AddTodo()}
            />

          </Pressable>
        </Pressable>
      }
    </>


  );
};


export default Calender

