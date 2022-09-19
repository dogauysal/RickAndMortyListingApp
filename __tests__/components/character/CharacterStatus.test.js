import { NativeBaseProvider } from "native-base";
import React from "react";
import renderer from "react-test-renderer";
import CharacterStatus from "../../../src/components/character/CharacterStatus";

describe("Character Status Component", () => {
    test("Character Status renders correctly", () => {

        const characterStatus = renderer.create(<NativeBaseProvider><CharacterStatus /></NativeBaseProvider>).toJSON();
        expect(characterStatus).toMatchSnapshot()
    })
})