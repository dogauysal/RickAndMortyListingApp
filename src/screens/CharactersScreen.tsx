import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import { Box, CheckIcon, FlatList, HStack, Select, Text, View } from "native-base";
import React, { useContext, useEffect } from "react";
import { Dimensions } from "react-native";
import CharacterItem from "../components/character/CharacterItem";
import Loading from "../components/common/Loading";
import { Character } from "../models/character/Character";
import { RootStackParamList } from "../routes/types";
import { RootStoreContext } from "../stores/rootStore";

type CharactersScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Characters">

const CharactersScreen = ({
    navigation,
    route
}: CharactersScreenNavigationProp) => {
    const { characterIds } = route.params

    const rootStore = useContext(RootStoreContext);
    const { selectedFilterType, filteredList, setFilterType, getSingleCharacter, getMultipleCharacters, characterList, isLoading, clearCharacterList } = rootStore.characterStore;

    useEffect(() => {
        fetchCharacterList()
    }, [])

    const fetchCharacterList = async () => {
        if (characterIds.length > 1) {
            await getMultipleCharacters(characterIds);
        } else {
            if (characterIds.length == 1) {
                await getSingleCharacter(characterIds[0])
            }
        }
    }

    const toCharacterDetailScreen = (id: number) => {
        navigation.navigate("CharacterDetail", {
            characterId: id
        })
    }

    return (
        <>
            <HStack alignItems={"center"} justifyContent="space-between" py={2} px={5}>
                <Box>
                    <Text style={{ fontSize: 16 }}>Filter by status</Text>
                </Box>
                <Box>
                    <Select selectedValue={selectedFilterType} width={160} _selectedItem={{
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => setFilterType(itemValue)}>
                        <Select.Item label="All" value="All" />
                        <Select.Item label="Dead" value="Dead" />
                        <Select.Item label="Alive" value="Alive" />
                        <Select.Item label="Unknown" value="Unknown" />
                    </Select>
                </Box>
            </HStack>
            <FlatList
                horizontal={true}
                data={filteredList}
                renderItem={({ item }) => <CharacterItem item={item} onClick={() => toCharacterDetailScreen(item.id)} isDetailScreen={false} />}
            />
            {isLoading && <Loading />}
        </>

    )
}

export default observer(CharactersScreen);