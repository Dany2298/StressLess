import React from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../assets/css/style";
import Profile from '../assets/Images/Profile.jpeg';
import ButtonMain from "../components/ButtonMain";
import Menu from "../components/Menu";



const renderFeed = ({item}) => {   //renders the feed item
    return (<View style={{ marginBottom: 20 }}>
   
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={{ height: 55, width: 55, borderRadius: 100 }} source={{uri:item.userImage}} /> 
            <View style={{ paddingHorizontal: 10 }}>
                <Text>Josh Wilson</Text>
                <Text style={{ fontSize: 10 }}>{item.time}</Text>
            </View>
        </View>

        <View style={{marginTop: 10,backgroundColor: "#BEE3F2",borderRadius: 25}}>
            <Text style={{margin: 10}}>{item.postText}</Text>
            <View style={{
                flexDirection: "row",
                padding: 20,
                justifyContent: "space-between"
            }}>

                <FlatList
                    data={item.postImages}
                    renderItem={({item})=>{
                        return(
                            <Image style={{
                                height: 150,
                                width: 100,
                                marginRight:10,
                                borderRadius:10
                            }} source={{uri:item}} />
                        )
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            
        </View>

    </View>);
}


const Collaboration = ({ navigation }) => { //renders the collaboration

    profileData = [             //array of profile images 
        "https://randomuser.me/api/portraits/women/27.jpg",
        "https://randomuser.me/api/portraits/men/72.jpg",
        "https://randomuser.me/api/portraits/women/32.jpg",
        "https://randomuser.me/api/portraits/men/94.jpg",
        "https://randomuser.me/api/portraits/men/49.jpg",
        "https://randomuser.me/api/portraits/women/23.jpg",
        "https://randomuser.me/api/portraits/women/27.jpg",
        "https://randomuser.me/api/portraits/men/72.jpg",
        "https://randomuser.me/api/portraits/women/32.jpg",
    ]


    feedData = [ //variable
        {
            user: "Josh Wilson",
            time: "1 hour ago",
            userImage: "https://randomuser.me/api/portraits/men/94.jpg",
            postText: "STRESSLESS is such a helpful application that has helped me manage my stress with University. Like if you agree. Also, check out these satisfying sunset pictures I took over the weekend.",
            postImages: [
                "https://images.unsplash.com/photo-1643944398479-0fd9eaee5cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
                "https://images.unsplash.com/photo-1643890810634-ad9ab1420f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1643864839453-0203e40da92c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                
            ]
        },
        {
            user: "Sarah Jane",
            time: "4 hour ago",
            userImage: "https://randomuser.me/api/portraits/women/32.jpg",
            postText: "Love the Gratitude Journal! I feel so positive noting down the different acts throughout my day that i’m grateful for. While journalling, I was out on a peaceful walk.",
            postImages: [
                "https://images.unsplash.com/photo-1601346664102-50ecb177e097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
                "https://images.unsplash.com/photo-1643604227701-208fd903d5f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1643306013950-fbe5297f98ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=800"
            ]
        },
        {
            user: "Josh Wilson",
            time: "1 hour ago",
            userImage: "https://randomuser.me/api/portraits/men/94.jpg",
            postText: "STRESSLESS is such a helpful application that has helped me manage my stress with University. Like if you agree. Also, check out these satisfying sunset pictures I took over the weekend.",
            postImages: [
                "https://images.unsplash.com/photo-1643306013950-fbe5297f98ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=800",
                "https://images.unsplash.com/photo-1643864839453-0203e40da92c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            ]
        },
        {
            user: "Sarah Jane",
            time: "4 hour ago",
            userImage: "https://randomuser.me/api/portraits/women/32.jpg",
            postText: "Love the Gratitude Journal! I feel so positive noting down the different acts throughout my day that i’m grateful for. While journalling, I was out on a peaceful walk.",
            postImages: [
                "https://images.unsplash.com/photo-1601346664102-50ecb177e097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
                "https://images.unsplash.com/photo-1643604227701-208fd903d5f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1643306013950-fbe5297f98ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=800"
            ]
        }
    ]

    return (
        <SafeAreaView style={{ padding: 20, backgroundColor: "#dbfbff", flex: 1 }}>
            <Menu /> 
            <Text style={styles.heading}>STRESSLESS COMMUNITY</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                <TextInput
                    style={{ backgroundColor: "#fff", height: 30, width: 160, borderRadius: 30, borderWidth: 1,textAlign: "center", paddingTop:2 }} 
                    onChangeText={""}
                    placeholder="Search"
                />

                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 5, backgroundColor: "#c9f2ff", height: 30, width: 160, borderRadius: 30, borderRadius: 30, borderWidth: 1, textAlign: "center" }} >
                    <View
                        onPress={() => setIsVisible(true)}
                        style={{ width: 18, height: 18, backgroundColor: "#9AE0FF", borderRadius: 9999, justifyContent: "center", alignItems: "center", }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#345C6A" }}>+</Text>
                    </View>
                    <Text style={{ fontSize: 10, marginLeft: 4, fontWeight: "bold", color: "#345C6A" }}>Create New Post</Text>
                </TouchableOpacity>

            </View>

            <Text style={[styles.heading, { marginTop: 10 }]}>Stories</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <TouchableOpacity
                    onPress={() => setIsVisible(true)}
                    style={{ width: 55, height: 55, backgroundColor: "#9AE0FF", borderRadius: 9999, justifyContent: "center", alignItems: "center", alignSelf: "flex-end" }}
                >
                    <Text style={{ fontSize: 40, fontWeight: "bold", color: "#345C6A", lineHeight: 42 }}>+</Text>
                </TouchableOpacity>
                <FlatList
                    data={profileData}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

            </View>

            <Text style={[styles.heading, { marginTop: 10 }]}>Feed</Text>
            <FlatList
                data={feedData}
                renderItem={renderFeed}
            />

            <ButtonMain
                text={"Explore Affirmations"}
                onPress={() => navigation.navigate('Affirmations')}
            />
        </SafeAreaView>



    );

    function renderItem({ item }) { //function contains item as object
        return <Image style={{ height: 55, width: 55, borderRadius: 100, marginLeft: 10 }}
            source={{ uri: item }} />; //image source
    }
};


export default Collaboration

