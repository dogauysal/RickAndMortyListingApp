import { NativeBaseProvider } from "native-base";
import React from "react";
import renderer from "react-test-renderer";
import PageNumber from "../../../src/components/common/PageNumber";

describe("Page Number Item Component", () => {
    test("Page Number renders correctly", () => {

        const pageNumber = renderer.create(<NativeBaseProvider><PageNumber /></NativeBaseProvider>).toJSON();
        expect(pageNumber).toMatchSnapshot()
    })
})