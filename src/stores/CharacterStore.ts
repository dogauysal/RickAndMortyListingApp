import { makeObservable, action, observable, computed } from "mobx";
import { Character } from "../models/character/Character";
import agent from "../services/agent";
import { RootStore } from "./rootStore";

export default class CharacterStore {

    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this);

    }

    @observable characterList: Character[] = [];
    @observable selectedFilterType: string = "All";
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

    @action setFilterType = (type: string) => {
        this.selectedFilterType = type;
    }

    @computed get filteredList() {
        switch (this.selectedFilterType) {
            case "All":
                return this.characterList;
            case "Dead":
                return this.characterList.filter(c => c.status === "Dead")
            case "Alive":
                return this.characterList.filter(c => c.status === "Alive")
            case "Unknown":
                return this.characterList.filter(c => c.status === "unknown")
            default:
                return []
        }
    }
}