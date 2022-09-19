import { NativeBaseProvider } from "native-base";
import React from "react";
import renderer from "react-test-renderer";
import LocationItem from "../../../src/components/location/LocationItem";

describe("Location Item Component", () => {
    test("Location Item renders correctly", () => {

        const locationItem = renderer.create(<NativeBaseProvider><LocationItem /></NativeBaseProvider>).toJSON();
        expect(locationItem).toMatchSnapshot()
    })
})