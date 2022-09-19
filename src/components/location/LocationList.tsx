import { observer } from "mobx-react-lite";
import { FlatList, Flex, Text } from "native-base";
import React, { useContext } from "react";
import Location from "../../models/location/Location";
import { RootStoreContext } from "../../stores/rootStore";
import UrlHelper from "../../utils/UrlHelper";
import Pagination from "../common/Pagination";
import LocationItem from "./LocationItem";

interface IProps {
    navigation: any;
}

const LocationList: React.FC<IProps> = ({
    navigation
}) => {

    const rootStore = useContext(RootStoreContext);
    const { currentPageLocations } = rootStore.locationStore;


    const toCharacterScreen = (residentUrls: string[]) => {
        let ids = UrlHelper.getResidentIds(residentUrls)

        navigation.navigate("Characters", {
            characterIds: ids
        });
    }



    return (
        <>
            <FlatList
                data={currentPageLocations}
                renderItem={({ item }) => <LocationItem
                    key={item.id}
                    item={item}
                    onClick={() => toCharacterScreen(item.residents)}
                />}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
                contentContainerStyle={{ flexGrow: 1 }}
                ListFooterComponentStyle={{ flex: 1, justifyContent: "flex-end" }}
                ListFooterComponent={<Pagination />}
            />
        </>
    )
}

export default observer(LocationList);