import { observer } from "mobx-react-lite";
import { Text } from "native-base";
import React, { useContext, useEffect } from "react";
import LocationItem from "../components/location/LocationItem";
import { RootStoreContext } from "../stores/rootStore";

const LocationsScreen = () => {

    const rootStore = useContext(RootStoreContext);
    const { getAllLocations, locationList } = rootStore.locationStore;

    useEffect(() => {
        fetchAllLocations();
    }, [])

    const fetchAllLocations = async () => {
        await getAllLocations();
    }

    return (
        <>
            {locationList && locationList.map(location => (
                <LocationItem item={location} />
            ))}
        </>
    )
}

export default observer(LocationsScreen);