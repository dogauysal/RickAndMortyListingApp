import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { Text } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import CharacterItem from "../components/character/CharacterItem";
import { Character } from "../models/character/Character";
import { RootStackParamList } from "../routes/types";
import { RootStoreContext } from "../stores/rootStore";

type CharacterDetailScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "CharacterDetail">

const CharacterDetailScreen = ({
    route
}: CharacterDetailScreenNavigationProp) => {
    const { characterId } = route.params

    const rootStore = useContext(RootStoreContext);
    const { characterList } = rootStore.characterStore;

    const [character, setCharacter] = useState<Character>();

    useEffect(() => {
        let currentCharacter = characterList.find(c => c.id === characterId);

        setCharacter(currentCharacter)
    }, [])

    return (
        <>
            {character && <CharacterItem item={character} isDetailScreen={true} />}
        </>
    )
}

export default observer(CharacterDetailScreen);