import { NativeBaseProvider } from "native-base";
import React from "react";
import renderer from "react-test-renderer";
import Loading from "../../../src/components/common/Loading";

describe("Loading Component", () => {
    test("Loading renders correctly", () => {

        const loading = renderer.create(<NativeBaseProvider><Loading /></NativeBaseProvider>).toJSON();
        expect(loading).toMatchSnapshot()
    })
})