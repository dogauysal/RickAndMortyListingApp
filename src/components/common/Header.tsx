import { Box, Center, Flex, HStack, Icon, IconButton, Image, StatusBar, Text, VStack } from "native-base";
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
            <HStack marginTop={10}>
                <Flex flex={1} flexDirection={"row"}>
                    <Center pl={3}>
                        {route.name !== "Locations" && <IconButton
                            icon={<Icon as={IonIcons} name="chevron-back-circle-outline" size={6} />}
                            onPress={() => navigation.goBack()}
                        />}

                    </Center>
                </Flex>
                <Flex flex={4}>
                    <Center>
                        <Image source={require("../../assets/image/logo.png")} alt="logo" />
                    </Center>
                </Flex>
                <Flex flex={1}></Flex>

            </HStack>
        </>
    )
}

export default Header;