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


const Affirmations = ({ navigation }) => {      //renders affirmations component


    return (

        <SafeAreaView style={{ padding: 20, backgroundColor: "#dbfbff", flex: 1 }}>
            <Menu />
            <ScrollView>    
                <Text style={styles.headingSecond}>
                    POSITIVE AFFIRMATIONS
                </Text>
            <View style={{ backgroundColor: "#51aeca", height: 40, borderRadius: 20, padding: 10, }}>
                <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600", }}>
                    1. Identify and reassess your Negative Thoughts
                </Text>
            </View>

            <Text style={{ padding: 10 }}>
                Self-awareness is key when managing your stress. A great way to be aware of these negative thoughts is to journal.
            </Text>

            <View style={{ paddingLeft: 20, padding: 10 }}>
                <Text >
                    1.  Our thoughts journal will allow you to identify and reflect on thoughts which are negative.
                </Text>
                <Text>
                    2. Our gratitude journal will allow you to look at the positive viewpoint in your daily life.
                </Text>
            </View>

            <View style={{ backgroundColor: "#51aeca", height: 40, borderRadius: 20, padding: 10, }}>
                <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600", }}>
                    2. Use positive affirmations for Stress Relief
                </Text>
            </View>

            <Text style={{ padding: 10 }}>
                Positive affirmations can support with counteracting any self limiting beliefs that add to your stress levels. Many students tend to self limit and not believe in themselves. These affirmations will assist in shifting your mindset to a positive one.
            </Text>

            <View style={{ backgroundColor: "#51aeca", height: 40, borderRadius: 20, padding: 10, }}>
                <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600", }}>
                    3. Practice self-compassion
                </Text>
            </View>

            <Text style={{ padding: 10 }}>
                It’s important to understand that stress is an inevitable part of life. With stress, we are trying to limit it so that is doesn't reach a level where it no longer serves us.
            </Text>
            <Text style={{ textAlign: "center", textDecorationLine: "underline", fontSize: 14, fontWeight: "bold" }}>
                5 AFFIRMATIONS THAT SUPPORT STRESS RELIEF
            </Text>


                <Text style={{ fontWeight: "bold",padding:5 }}>
                    1. I am relaxed and calm{"\n"}
                    2. My tension is melting away{"\n"}
                    3. I release all tension from my mind and body{"\n"}
                    4. I am in control of my stress levels{"\n"}
                    5. I am peaceful and centered.
                </Text>
  

            <ButtonMain
                text={"Visit Mindfulness Meditation"}
                onPress={() => navigation.navigate('Meditation')}
            />
            </ScrollView>
        </SafeAreaView>


    );
};


export default Affirmations