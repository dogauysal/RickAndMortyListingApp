import { Info } from "../shared/Info";

export interface RickMortyResponse<T> {
    info: Info;
    results: T[];
}