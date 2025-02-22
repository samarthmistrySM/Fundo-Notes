import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home.tsx';
import NewNote from '../screens/NewNote.tsx';
import CustomDrawer from './CustomDrawer';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Image} from 'react-native';
import {DrawerParamList, StackParamList} from './types.ts';

const bulbIcon = require('../assets/lightbulb.png');
const bellIcon = require('../assets/bell.png');
const plusIcon = require('../assets/plus.png');
const archiveIcon = require('../assets/archivebox.png');
const binIcon = require('../assets/trash.png');
const settingsIcon = require('../assets/gear.png');
const feedbackIcon = require('../assets/exclamationmark.bubble.png');
const helpIcon = require('../assets/questionmark.circle.png');

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createStackNavigator<StackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        drawerIcon: ({color, size}) => {
          let icon;
          if (route.name === 'Home') {
            icon = bulbIcon;
          } else if (route.name === 'Reminders') {
            icon = bellIcon;
          } else if (route.name === 'CreateLabel') {
            icon = plusIcon;
          } else if (route.name === 'Archive') {
            icon = archiveIcon;
          } else if (route.name === 'Bin') {
            icon = binIcon;
          } else if (route.name === 'Setting') {
            icon = settingsIcon;
          } else if (route.name === 'feedback') {
            icon = feedbackIcon;
          } else if (route.name === 'Help') {
            icon = helpIcon;
          }
          return (
            <Image
              style={{
                tintColor: color,
                width: size,
                height: size,
                objectFit: 'contain',
              }}
              source={icon}
            />
          );
        },
      })}>
      <Drawer.Screen name={'Home'} component={Home} />
      <Drawer.Screen name={'Reminders'} component={Home} />
      <Drawer.Screen name={'CreateLabel'} component={Home} />
      <Drawer.Screen name={'Archive'} component={Home} />
      <Drawer.Screen name={'Bin'} component={Home} />
      <Drawer.Screen name={'Setting'} component={Home} />
      <Drawer.Screen name={'feedback'} component={Home} />
      <Drawer.Screen name={'Help'} component={Home} />
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Main'}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="NewNote" component={NewNote} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
