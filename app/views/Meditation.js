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

const Meditation = ({ navigation }) => {
        return(
     <SafeAreaView style={{ padding: 20, backgroundColor: "#dbfbff", flex: 1 }}>
            <Menu />
            <ScrollView>
                <Text style={styles.headingSecond}>
                
                    MINDFULNESS MEDITATION 
                </Text>
                
                 <Text style={{ backgroundColor: "#BEE3F2", padding: 10, paddingLeft:20, paddingBottom:20, borderRadius:20, marginBottom:10 }}>
                Want to improve your focus, boost your memory and mental clarity? Have a look at our meditation guide which everyone can do.
            </Text>
            <View style={{ backgroundColor: "#51aeca", height: 40, borderRadius: 20, padding: 10, }}>
                <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600", textAlign:"center" }}>
                                 How to Meditate? 🧘 
                </Text>
            </View>

            
            <Text style={{ padding: 10}}>
                 1) Take a seat.{"\n"}
                     Find a comforting place that is quiet and calm.       
             </Text>
           
             <Text style={{ padding: 10 }}>
                 2) Set a time limit. {"\n"}
                    If you’re just beginning, it can help to choose a short time, such as 5 or 10 minutes.        
              </Text>
             
              <Text style={{ padding: 10 }}>
                 3) Notice your body. {"\n"}
                    Make sure you are stable and in a position you can stay in for a while.
             </Text>

            <Text style={{ padding: 10 }}>
                 4) Feel your breath. {"\n"}
                Follow the sensation of your breath as it goes in and as it goes out
             </Text>

              <Text style={{ padding: 10 }}>
                5) Notice when your mind has wandered. {"\n"}
                Inevitably, your attention will leave the breath and wander to other places. When your mind has wandered, simply return your attention to the breath.

             </Text>

                <Text style={{ padding: 10 }}>
               6) Be kind to your wandering mind. {"\n"}
                Don’t judge yourself or obsess over the content of the thoughts you find yourself lost in. Just come back.

             </Text>

              <Text style={{ padding: 10 }}>
               7) Close with kindness. {"\n"}
                When you’re ready, gently open your eyes. Take a moment and notice any sounds in the environment. Notice how your body feels right now. Notice your thoughts and emotions.
             </Text>

            

  

            <ButtonMain
                text={"Home"}
                onPress={() => navigation.navigate('Dashboard')}
            />
            </ScrollView>
        </SafeAreaView>

        )
    ;
};


export default Meditation