import LocationInfo from "../shared/LocationInfo";
import { Origin } from "./Origin";

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: LocationInfo;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}