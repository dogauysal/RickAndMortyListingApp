import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Header from "../components/common/Header";
import CharacterDetailScreen from "../screens/CharacterDetailScreen";
import CharactersScreen from "../screens/CharactersScreen";
import LocationsScreen from "../screens/LocationsScreen";

const RootStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <Header />
            }}
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