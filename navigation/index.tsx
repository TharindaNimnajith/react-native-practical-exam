/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/modals/ModalScreen';
import NotFoundScreen from '../screens/shared/NotFoundScreen';
import TabOneScreen from '../screens/tabs/TabOneScreen';
import TabTwoScreen from '../screens/tabs/TabTwoScreen';
import TabThreeScreen from '../screens/tabs/TabThreeScreen';
import LoginScreen from "../screens/login/LoginScreen";
import {RootStackParamList, RootTabParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Modal" component={ModalScreen}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  // noinspection JSUnusedGlobalSymbols
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <TabBarIcon name="search" color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <TabBarIcon name="book" color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
