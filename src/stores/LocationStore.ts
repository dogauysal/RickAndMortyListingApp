import { action, autorun, computed, makeObservable, observable } from "mobx";
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

    @observable currentApiPage: number = 1;
    @observable currentPage: number = 1;
    @observable totalPages: number = 1;

    @action setIsLoading = (value: boolean) => {
        this.isLoading = value;
    }

    @action getAllLocations = async () => {
        this.setIsLoading(true)

        await agent.LocationService.getAllLocations(this.currentApiPage).then(res => {

            this.updateLocationList(res.results);
            this.updatePageInfo(res.info)
            this.updateTotalPages(res.info.count)
        }).finally(() => {
            this.setIsLoading(false)
        })
    }

    @action updateLocationList = (results: Location[]) => {
        this.locationList = results;
    }

    @action updatePageInfo = (info: Info) => {
        this.pageInfo = info
    }

    @action updateTotalPages = (totalItemCount: number) => {
        this.totalPages = Math.ceil(totalItemCount / 4)
    }

    @action setApiPage = (page: number) => {
        this.currentApiPage = page
    }

    @action setCurrentPage = (page: number) => {

        let pageIndex = Math.ceil(page / 5);

        if (pageIndex != this.currentApiPage) {
            this.setApiPage(pageIndex)
            this.getAllLocations()
        }

        this.currentPage = page
    }

    @computed get currentPageLocations() {

        let index = (this.currentPage - 1) % 5;

        let start = index * 4;

        return this.locationList.slice(start, start + 4)
    }



}