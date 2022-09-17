import { Character } from "../models/character/Character";
import Location from "../models/location/Location";
import { RickMortyResponse } from "../models/response/RickMortyResponse";
import HttpClient from "../utils/HttpClient";

const LocationService = {
    getAllLocations: () => HttpClient.get<RickMortyResponse<Location>>('/location'),
    getLocationById: (id: number) => HttpClient.get<Location>(`/location/${id}`)
}

const CharacterService = {
    getAllCharacters: () => HttpClient.get<RickMortyResponse<Character[]>>('/character'),
    getCharacterById: (id: number) => HttpClient.get<Character>(`/character/${id}`),
    getMultipleCharacters: (idList: number[]) => HttpClient.get<Character[]>(`/character/${idList}`)
}

export default {
    LocationService,
    CharacterService
}