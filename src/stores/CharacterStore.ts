import { makeObservable, action, observable, computed, runInAction, reaction } from "mobx";
import { Character } from "../models/character/Character";
import agent from "../services/agent";
import { RootStore } from "./rootStore";
import { makePersistable } from 'mobx-persist-store';

export default class CharacterStore {

    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this);
        // makePersistable(this, {
        //     name: "CharacterStore",
        //     properties: ["characterList"],
        //     storage: window.localStorage
        // });
    }

    @observable characterList: Character[] = [];
    @observable isLoading: boolean = false;

    @action getSingleCharacter = async (characterId: number) => {

        this.isLoading = true;

        this.clearCharacterList();

        await agent.CharacterService.getCharacterById(characterId).then(res => {
            this.characterList.push(res);
        }).finally(() => {
            this.isLoading = false;
        })
    }

    @action getMultipleCharacters = async (characterIds: number[]) => {

        this.isLoading = true;

        this.clearCharacterList();

        await agent.CharacterService.getMultipleCharacters(characterIds).then(res => {
            this.setCharacterList(res)
        }).finally(() => {
            this.isLoading = false;
        })
    }

    @action setCharacterList = (characterList: Character[]) => {
        characterList.map(character => {
            this.characterList.push(character)
        })
    }

    @action clearCharacterList = () => {
        this.characterList = [];
    }


}