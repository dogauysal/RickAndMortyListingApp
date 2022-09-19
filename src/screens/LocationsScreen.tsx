import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { FlatList, Spinner, Text } from "native-base";
import React, { useContext, useEffect } from "react";
import Loading from "../components/common/Loading";
import Pagination from "../components/common/Pagination";
import LocationItem from "../components/location/LocationItem";
import LocationList from "../components/location/LocationList";
import { RootStackParamList } from "../routes/types";
import { RootStoreContext } from "../stores/rootStore";

type LocationsScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Locations">

const LocationsScreen = ({
    navigation
}: LocationsScreenNavigationProp) => {

    const rootStore = useContext(RootStoreContext);
    const { getAllLocations, isLoading } = rootStore.locationStore;

    useEffect(() => {
        fetchAllLocations();
    }, [])

    const fetchAllLocations = async () => {
        await getAllLocations();
    }

    return (
        <>
            <LocationList navigation={navigation} />
            {isLoading && <Loading />}
        </>
    )
}

export default observer(LocationsScreen);