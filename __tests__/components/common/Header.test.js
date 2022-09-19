import { NativeBaseProvider } from "native-base";
import React from "react";
import renderer from "react-test-renderer";
import Header from "../../../src/components/common/Header";

describe("Header Component", () => {
    test("Header renders correctly", () => {

        const header = renderer.create(<NativeBaseProvider><Header /></NativeBaseProvider>).toJSON();
        expect(header).toMatchSnapshot()
    })
})