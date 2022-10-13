import React from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../assets/css/style";
import ButtonMain from "../components/ButtonMain";
import Menu from "../components/Menu";


const MeditationVideos = ({ navigation }) => {      //renders affirmations component


    return (

        <SafeAreaView style={{ padding: 20, backgroundColor: "#dbfbff", flex: 1 }}>
            <Menu />
            <ScrollView>    
                <Text style={styles.headingSecond}>
                    Meditation Videos
                </Text>
            <Text style={{ color:"#3F3A3A",backgroundColor: "#BEE3F2", padding: 10, paddingLeft:20, paddingBottom:10, borderRadius:20, marginBottom:20,fontSize:13.5 }}>
               If you’d like to join in and meditate with a video or listen to meditation music, below are numerous videos that can support your meditation journey!  🧘 
            </Text>

            <Image style={{ height: 154, width: 365, borderRadius: 100,marginBottom:20 }}
                    source={{uri:"https://images.unsplash.com/photo-1643944398479-0fd9eaee5cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"}} />

             <Image style={{ height: 154, width: 365, borderRadius: 100, marginBottom:20 }}
                    source={{uri:"https://images.unsplash.com/photo-1643890810634-ad9ab1420f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"}} />

             <Image style={{ height: 154, width: 365, borderRadius: 100, }}
                    source={{uri:"https://images.unsplash.com/photo-1643306013950-fbe5297f98ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=800"}} />

            
  

            <ButtonMain
                text={"Back to Home"}
                onPress={() => navigation.navigate('Dashboard')}
            />
            </ScrollView>
        </SafeAreaView>


    );
};


export default MeditationVideos