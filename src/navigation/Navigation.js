import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Transaksi from '../screens/Transaksi';
import Laporan from '../screens/Laporan';
import Setelan from '../screens/Setelan';
import TambahTransaksi from '../screens/TambahTransaksi';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Transaksi"
      tabBarOptions={{
        activeTintColor: 'dodgerblue',
        inactiveTintColor: 'grey',
        showLabel: true,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconSize;

          if (route.name === 'Transaksi') {
            iconName = focused ? 'pencil-square-o' : 'pencil-square-o';
            iconSize = size;
          } else if (route.name === 'Laporan') {
            iconName = focused ? 'book' : 'book';
            iconSize = size;
          }
          if (route.name === 'Setelan') {
            iconName = focused ? 'gear' : 'gear';
            iconSize = size;
          }

          return <Icon name={iconName} size={iconSize} color={color} />;
        },
      })}>
      <Tab.Screen name="Transaksi" component={Transaksi} />
      <Tab.Screen name="Laporan" component={Laporan} />
      <Tab.Screen name="Setelan" component={Setelan} />
      <Tab.Screen
        name="TambahTransaksi"
        component={TambahTransaksi}
        options={{tabBarVisible: false, tabBarButton: () => null}}
      />
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
