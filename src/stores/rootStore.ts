import { configure } from "mobx";
import { createContext } from "react";
import LocationStore from "./LocationStore";

configure({ enforceActions: 'always' });

export class RootStore {
    locationStore: LocationStore;

    constructor() {
        this.locationStore = new LocationStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore())