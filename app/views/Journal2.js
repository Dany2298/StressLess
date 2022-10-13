import React from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../assets/css/style";

const Journal2 = ({ navigation }) => {
    return (

        <SafeAreaView style={{ padding: 20, backgroundColor: "#dbfbff", flex: 1 }}>
            <View>
                <Text style={{ textAlign: "left", margin: 5, textDecorationLine: "underline", fontSize: 18 }}>
                    Gratitude Journal
                </Text>
                <Text style={{ color: "#4e8c9f", margin: 5 }}>
                    Tuesday, 24/12/21
                </Text>
            </View>

            <Text style={{ fontWeight: "500", margin: 5 ,fontSize:15}}>
                What thoughts are on your mind today?
            </Text>
            <Text style={{ textDecorationLine: "underline", }}>

            </Text>
            <View style={{ alignItems: "center", padding: 30 }}>
                <TouchableOpacity
                    style={{ backgroundColor: "#437e8f", height: 30, margin: 5, width: 150, borderRadius: 20, }}
                >
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 15, margin: 5 }}>
                        Save
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: "#437e8f", height: 30, margin: 5, width: 150, borderRadius: 20, }}
                >
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 15, margin: 5 }}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{ backgroundColor: "#4e8c9f", margin: 20, }}
                onPress={() => navigation.navigate('Calender')} >
                <Text style={{ textAlign: "center", padding: 10, color: "#FFF", fontSize: 20 }}>
                    Explore calendar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>



    );
};


export default Journal2

