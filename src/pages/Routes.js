import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather, FontAwesome5} from "@expo/vector-icons";

import Home from './Home';
import Biblia from "./Biblia";
import Devocional from "./Devocional";
import Avisos from "./Avisos";

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: '#ddd',
                borderTopColor: 'transparent',
                height:'8%',
            },
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#777',
            tabBarActiveBackgroundColor: '#aaa',
            tabBarLabelStyle: styles.textoAba
        }}
        initialRouteName="Início"
        >
            <Tab.Screen name="Bíblia Quadrangular" 
            component={Home}
            options={{
                tabBarIcon:({size,color})=>(
                    <Entypo name="home" size={size} color={color} />
                ),
                headerTitleAlign: "center",
            }}
             />
            <Tab.Screen name="Bíblia" 
            component={Biblia} 
            options={{
                tabBarIcon:({size,color})=>(
                    <FontAwesome5 name="bible" size={size} color={color} />
                ),
                headerTitleAlign: "center",
            }}
            />
            <Tab.Screen name="Devocional" 
            component={Devocional} 
            options={{
                tabBarIcon:({size,color})=>(
                    <Entypo name="pencil" size={size} color={color} />
                ),
                headerTitleAlign: "center",
            }}
            />
            <Tab.Screen name="Avisos" 
            component={Avisos} 
            options={{
                tabBarIcon:({size,color})=>(
                    <Entypo name="notification" size={size} color={color} />
                ),
                headerTitleAlign: "center",
            }}
            />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    textoAba: {
        fontSize: 15,
        lineHeight: 20,
        marginBottom: 4,
    }
});