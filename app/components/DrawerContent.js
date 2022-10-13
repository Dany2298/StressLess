import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    TouchableOpacity,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import styles from '../assets/css/style';



import { useNavigation } from '@react-navigation/native';
import ApplicationServices from '../Services/ApplicationServices';

export default function DrawerContent(props) {
    const navigation = useNavigation();

    const _logout = async() =>{
        
        let appService = new ApplicationServices()
        await appService.logOut()

        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
          })
    }

    return (
        <View style={styles.body}>
            <DrawerContentScrollView  {...props}>
               
                <TouchableOpacity
                style={styles.drwerButton}
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'MainDrawer' }]
                      })
                }}>
                    <Text style={{ marginLeft: 10 }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.drwerButton}
                onPress={() => navigation.navigate('Create')} >
                    <Text style={{ marginLeft: 10 }}>Journal</Text>
                </TouchableOpacity>


                <TouchableOpacity
                style={styles.drwerButton}
                onPress={() => navigation.navigate('Entry',{type:"Gratitude"})} >
                    <Text style={{ marginLeft: 10 }}>Gratitude Note</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.drwerButton}
                onPress={() => navigation.navigate('Entry',{type:"Thoughts"})} >
                    <Text style={{ marginLeft: 10 }}>Thought Note</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.drwerButton}
                onPress={() => navigation.navigate('Calender')}>
                    <Text style={{ marginLeft: 10 }}>Calender</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.drwerButton}
                onPress={() => navigation.navigate('Collaboration')}>
                    <Text style={{ marginLeft: 10 }}>Collaboration</Text>
                </TouchableOpacity>


                <TouchableOpacity
                style={styles.drwerButton}
                onPress={() => navigation.navigate('Affirmations')}>
                    <Text style={{ marginLeft: 10 }}>Affirmations</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                style={styles.drwerButton}
                onPress={() => navigation.navigate('Meditation')}>
                    <Text style={{ marginLeft: 10 }}>Meditation</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.drwerButton}
                onPress={() => navigation.navigate('MeditationVideos')}>
                    <Text style={{ marginLeft: 10 }}>MeditationVideos</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={styles.drwerButton}
                onPress={() => _logout()}>
                    <Text style={{ marginLeft: 10 }}>Logout</Text>
                </TouchableOpacity>

            </DrawerContentScrollView>

        </View>
    );
}
