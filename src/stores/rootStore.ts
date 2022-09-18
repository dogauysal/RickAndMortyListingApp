import { configure } from "mobx";
import { createContext } from "react";
import CharacterStore from "./CharacterStore";
import LocationStore from "./LocationStore";

configure({ enforceActions: 'always' });

export class RootStore {
    locationStore: LocationStore;
    characterStore: CharacterStore;

    constructor() {
        this.locationStore = new LocationStore(this);
        this.characterStore = new CharacterStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore())