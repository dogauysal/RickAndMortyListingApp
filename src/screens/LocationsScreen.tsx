import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { Spinner } from "native-base";
import React, { useContext, useEffect } from "react";
import Loading from "../components/common/Loading";
import LocationItem from "../components/location/LocationItem";
import { RootStackParamList } from "../routes/types";
import { RootStoreContext } from "../stores/rootStore";
import UrlHelper from "../utils/UrlHelper";

type LocationsScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Locations">

const LocationsScreen = ({
    navigation
}: LocationsScreenNavigationProp) => {

    const rootStore = useContext(RootStoreContext);
    const { getAllLocations, locationList, isLoading } = rootStore.locationStore;

    useEffect(() => {
        fetchAllLocations();
    }, [])

    const fetchAllLocations = async () => {
        await getAllLocations();
    }

    const toCharacterScreen = (residentUrls: string[]) => {
        let ids = UrlHelper.getResidentIds(residentUrls)

        navigation.navigate("Characters", {
            characterIds: ids
        });
    }


    return (
        <>
            {locationList && locationList.map(location => (
                <LocationItem
                    key={location.id}
                    item={location}
                    onClick={() => toCharacterScreen(location.residents)}
                />
            ))}

            {isLoading && <Loading />}
        </>
    )
}

export default observer(LocationsScreen);