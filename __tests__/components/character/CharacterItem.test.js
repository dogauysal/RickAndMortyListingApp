import { NativeBaseProvider } from "native-base";
import React from "react";
import renderer from "react-test-renderer";
import CharacterItem from "../../../src/components/character/CharacterItem";

describe("Character Item Component", () => {
    test("Character Item renders correctly", () => {

        const characterItem = renderer.create(<NativeBaseProvider><CharacterItem /></NativeBaseProvider>).toJSON();
        expect(characterItem).toMatchSnapshot()
    })
})