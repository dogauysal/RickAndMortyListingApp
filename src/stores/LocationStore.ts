import { action, autorun, makeObservable, observable, reaction } from "mobx";
import Location from "../models/location/Location";
import { Info } from "../models/shared/Info";
import agent from "../services/agent";
import { RootStore } from "./rootStore";

export default class LocationStore {

    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this);
    }

    @observable locationList: Location[] = [];
    @observable pageInfo?: Info
    @observable isLoading: boolean = false;

    @action getAllLocations = async () => {
        this.isLoading = true;

        await agent.LocationService.getAllLocations().then(res => {
            this.locationList = res.results;
            this.pageInfo = res.info;

        }).finally(() => {
            this.isLoading = false
        })
    }


}