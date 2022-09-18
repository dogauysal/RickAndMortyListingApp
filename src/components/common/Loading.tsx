import { HStack, Spinner } from "native-base";
import React from "react";

const Loading = () => {

    return (
        <HStack height={"100%"} space={8} justifyContent="center" alignItems="center">
            <Spinner size="lg" />
        </HStack>
    )
}

export default Loading;