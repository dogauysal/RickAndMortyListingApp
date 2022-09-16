import { Center, HStack, Image, StatusBar, Text } from "native-base";
import React from "react";

const Header = () => {
    // 
    return (
        <>
            <HStack space={3} justifyContent="center" marginTop={10}>
                <Center></Center>
                <Center>
                    <Image source={require("../../assets/image/logo.png")} alt="logo" />
                </Center>
                <Center></Center>
            </HStack>
        </>

    )
}

export default Header;