import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Transaksi from '../screens/Transaksi';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Transaksi"
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: 'grey',
        showLabel: false,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconSize;

          if (route.name === 'Transaksi') {
            iconName = focused ? 'home' : 'home';
            iconSize = size;
          }

          return <Icon name={iconName} size={iconSize} color={color} />;
        },
      })}>
      <Tab.Screen name="Transaksi" component={Transaksi} />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
