import { Box, Center, Flex, HStack, Icon, IconButton, Image, StatusBar, Text } from "native-base";
import React from "react";
import IonIcons from 'react-native-vector-icons/Ionicons';

interface IProps {
    route: any;
    navigation: any
}

const Header: React.FC<IProps> = ({
    navigation,
    route
}) => {

    route.name
    return (
        <>
            <HStack marginTop={10} >
                <Center>
                    {route.name !== "Locations" && <IconButton
                        icon={<Icon as={IonIcons} name="chevron-back-circle-outline" size={6} />}
                        onPress={() => navigation.goBack()}
                    />}

                </Center>
                <Center>
                    <Image source={require("../../assets/image/logo.png")} alt="logo" />
                </Center>
            </HStack>
        </>

    )
}

export default Header;