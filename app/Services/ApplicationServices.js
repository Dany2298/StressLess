import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Importing the react library and the AsyncStorage Library

class ApplicationServices extends React.Component {    //creates a react component

    storeLoginData = async (userName, uid, uni) => {  //setting values 
        try {   //check if values have been set
            await AsyncStorage.setItem('@userName', userName.toString())
            await AsyncStorage.setItem('@uid', uid.toString())
            await AsyncStorage.setItem('@uni', uni.toString()) 
            return true   //if values set, return true
        } catch (e) {
            return false   //if values are not set, return false
        }
    }
        //get method from the a sync storage
    getUserName = async () => {     
        let res = false
        try {
            res = await AsyncStorage.getItem('@userName') //if found, return username
            return res
        } catch (e) {
            return false //not found, return false
         }
    }
        //get method for users details from a sync storage
    getUserDetail = async () => { 
        
        try {     
        let name = await AsyncStorage.getItem('@userName') 
        let uid = await AsyncStorage.getItem('@uid')
        let uni = await AsyncStorage.getItem('@uni') 
            return {name,uid,uni} //returning with users details
        } catch (e) {
            return false  
        }
    }
        // logout method utilizing a sync.
    logOut = async () => {
        try {
            await AsyncStorage.removeItem('@userName') //remove user name
            await AsyncStorage.removeItem('@uid')     //remove user id
            await AsyncStorage.removeItem('@uni')    //remove uni
        } catch (e) {
            return false 
        }
    }
}


export default ApplicationServices;
