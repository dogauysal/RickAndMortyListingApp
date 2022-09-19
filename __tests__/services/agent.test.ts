import agent from "../../src/services/agent";
import axios, { AxiosResponse } from "axios";
import Location from "../../src/models/location/Location";
import { Character } from "../../src/models/character/Character";
import { RickMortyResponse } from "../../src/models/response/RickMortyResponse";


const { LocationService, CharacterService } = agent;

jest.mock("axios")

const mockedAxios = axios as jest.Mocked<typeof axios>;

const locations: Location[] = [
    { "id": 1, "name": "Earth (C-137)", "type": "Planet", "dimension": "Dimension C-137", "residents": ["https://rickandmortyapi.com/api/character/38", "https://rickandmortyapi.com/api/character/45", "https://rickandmortyapi.com/api/character/71", "https://rickandmortyapi.com/api/character/82", "https://rickandmortyapi.com/api/character/83", "https://rickandmortyapi.com/api/character/92", "https://rickandmortyapi.com/api/character/112", "https://rickandmortyapi.com/api/character/114", "https://rickandmortyapi.com/api/character/116", "https://rickandmortyapi.com/api/character/117", "https://rickandmortyapi.com/api/character/120", "https://rickandmortyapi.com/api/character/127", "https://rickandmortyapi.com/api/character/155", "https://rickandmortyapi.com/api/character/169", "https://rickandmortyapi.com/api/character/175", "https://rickandmortyapi.com/api/character/179", "https://rickandmortyapi.com/api/character/186", "https://rickandmortyapi.com/api/character/201", "https://rickandmortyapi.com/api/character/216", "https://rickandmortyapi.com/api/character/239", "https://rickandmortyapi.com/api/character/271", "https://rickandmortyapi.com/api/character/302", "https://rickandmortyapi.com/api/character/303", "https://rickandmortyapi.com/api/character/338", "https://rickandmortyapi.com/api/character/343", "https://rickandmortyapi.com/api/character/356", "https://rickandmortyapi.com/api/character/394"], "url": "https://rickandmortyapi.com/api/location/1", "created": new Date() }, { "id": 2, "name": "Abadango", "type": "Cluster", "dimension": "unknown", "residents": ["https://rickandmortyapi.com/api/character/6"], "url": "https://rickandmortyapi.com/api/location/2", "created": new Date() }
]

const characters: Character[] = [
    { "id": 1, "name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", "gender": "Male", "origin": { "name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1" }, "location": { "name": "Citadel of Ricks", "url": "https://rickandmortyapi.com/api/location/3" }, "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg", "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/37", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41", "https://rickandmortyapi.com/api/episode/42", "https://rickandmortyapi.com/api/episode/43", "https://rickandmortyapi.com/api/episode/44", "https://rickandmortyapi.com/api/episode/45", "https://rickandmortyapi.com/api/episode/46", "https://rickandmortyapi.com/api/episode/47", "https://rickandmortyapi.com/api/episode/48", "https://rickandmortyapi.com/api/episode/49", "https://rickandmortyapi.com/api/episode/50", "https://rickandmortyapi.com/api/episode/51"], "url": "https://rickandmortyapi.com/api/character/1", "created": new Date() }, { "id": 183, "name": "Johnny Depp", "status": "Alive", "species": "Human", "type": "", "gender": "Male", "origin": { "name": "Earth (C-500A)", "url": "https://rickandmortyapi.com/api/location/23" }, "location": { "name": "Earth (C-500A)", "url": "https://rickandmortyapi.com/api/location/23" }, "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg", "episode": ["https://rickandmortyapi.com/api/episode/8"], "url": "https://rickandmortyapi.com/api/character/183", "created": new Date() }
]


afterEach(() => {
    //To check how many times axios.get called 
    jest.clearAllMocks()
})

describe("get all locations", () => {

    test("should return location list", async () => {
        const mockedResponse: AxiosResponse = {
            data: locations,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled()
        const res = await LocationService.getAllLocations(1);
        expect(axios.get).toHaveBeenCalled()
        expect(res).toEqual(locations)
    })
})

describe("get location by id", () => {
    test("should return single location item", async () => {
        const mockedResponse: AxiosResponse = {
            data: locations[0],
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };


        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled()
        const data = await LocationService.getLocationById(1)
        expect(axios.get).toHaveBeenCalled()
        expect(axios).not.toBeNull()
        expect(data).toEqual(locations[0])
    })
})

describe("get all characters", () => {

    test("should return character list", async () => {
        const mockedResponse: AxiosResponse = {
            data: characters,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled()
        const res = await CharacterService.getAllCharacters();
        expect(axios.get).toHaveBeenCalled()
        expect(res).toEqual(characters)
    })
})

describe("get character by id", () => {
    test("should return single character item", async () => {
        const mockedResponse: AxiosResponse = {
            data: characters[0],
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };


        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled()
        const data = await CharacterService.getCharacterById(1)
        expect(axios.get).toHaveBeenCalled()
        expect(axios).not.toBeNull()
        expect(data).toEqual(characters[0])
    })
})

describe("get multiple characteres", () => {

    test("should return multiple characters", async () => {
        const mockedResponse: AxiosResponse = {
            data: characters,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled()
        const res = await CharacterService.getMultipleCharacters([1, 2]);
        expect(axios.get).toHaveBeenCalled()
        expect(res).toEqual(characters)
    })
})