import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; //imports to provide gestures and animations
import Splash from '../views/Splash';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Register from '../views/Register';
import ForgetPassword from '../views/ForgetPassword';
import Create from '../views/Create';
import ViewAll from '../views/ViewAll';
import Entry from '../views/Entry';
import Journal2 from '../views/Journal2';
import Calender from '../views/Calender';
import Collaboration from '../views/Collaboration';
import DrawerContent from '../components/DrawerContent';
import Affirmations from '../views/Affirmations';
import ViewMoodChart from '../views/ViewMoodChart';
import Meditation from '../views/Meditation';
import MeditationVideos from '../views/MeditationVideos';
//importing routes and components 

const Routes = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
//create stack and drawer nav

  const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Dashboard"  drawerContent={(props) => <DrawerContent {...props} />} >
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Create" component={Create} />
          <Drawer.Screen name="ViewAll" component={ViewAll} />
          <Drawer.Screen name="Entry" component={Entry} />
          <Drawer.Screen name="Journal2" component={Journal2} />
          <Drawer.Screen name="Calender" component={Calender} />
          <Drawer.Screen name="Collaboration" component={Collaboration} />
          <Drawer.Screen name="Affirmations" component={Affirmations} />
          <Drawer.Screen name="Meditation" component={Meditation} />
          <Drawer.Screen name="MeditationVideos" component={MeditationVideos} />
          <Drawer.Screen name="ViewMoodChart" component={ViewMoodChart} />    
        </Drawer.Navigator>
        //creates a drawer screen for each screen
    );
  }
 
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="Splash">  
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="MainDrawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
    //defines stack screen components

  );
};

export default Routes;
