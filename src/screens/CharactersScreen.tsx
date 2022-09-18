import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import { Text } from "native-base";
import React, { useContext, useEffect } from "react";
import CharacterItem from "../components/character/CharacterItem";
import Loading from "../components/common/Loading";
import { RootStackParamList } from "../routes/types";
import { RootStoreContext } from "../stores/rootStore";

type CharactersScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Characters">

const CharactersScreen = ({
    navigation,
    route
}: CharactersScreenNavigationProp) => {
    const { characterIds } = route.params

    const rootStore = useContext(RootStoreContext);
    const { getSingleCharacter, getMultipleCharacters, characterList, isLoading } = rootStore.characterStore;

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
            {characterList && characterList.map(character => (
                <CharacterItem item={character} onClick={() => toCharacterDetailScreen(character.id)} isDetailScreen={false} />
            ))}
            {isLoading && <Loading />}
        </>

    )
}

export default observer(CharactersScreen);