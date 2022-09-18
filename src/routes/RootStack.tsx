import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon, IconButton } from "native-base";
import React from "react";
import Header from "../components/common/Header";
import CharacterDetailScreen from "../screens/CharacterDetailScreen";
import CharactersScreen from "../screens/CharactersScreen";
import LocationsScreen from "../screens/LocationsScreen";
import { RootStackParamList } from "./types";

const RootStack = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator
            screenOptions={({ route, navigation }) => ({
                header: () => <Header route={route} navigation={navigation} />
            })}
        >
            <Stack.Screen
                name="Locations"
                component={LocationsScreen}
            />
            <Stack.Screen
                name="Characters"
                component={CharactersScreen}
            />
            <Stack.Screen
                name="CharacterDetail"
                component={CharacterDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default RootStack