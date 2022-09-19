import { AspectRatio, Box, Center, Flex, Heading, Icon, IconButton, Image, Stack, Text } from "native-base";
import React from "react";
import { Character } from "../../models/character/Character";
import CharacterStatus from "./CharacterStatus";
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Dimensions, StyleSheet } from "react-native";


interface IProps {
    item: Character
    onClick?: () => void;
    isDetailScreen: boolean;
}

const CharacterItem: React.FC<IProps> = ({
    item,
    onClick,
    isDetailScreen
}) => {
    return (
        <Box alignItems="center" py={2}>
            <Box width={Dimensions.get('screen').width} rounded="lg" overflow="hidden" px={5} >
                <Box>
                    <AspectRatio w="100%">
                        <Image source={{
                            uri: item.image
                        }} alt="image" />
                    </AspectRatio>
                </Box>
                <Flex py={1} direction="row" justifyContent="space-between">
                    <Stack>
                        <Heading size="sm" color={"gray.500"}>
                            {item.name}
                        </Heading>
                        <CharacterStatus status={item.status} species={item.species} />
                        {isDetailScreen && <Text style={styles.subtitle}>{item.origin.name}</Text>}
                    </Stack>
                    <Stack>
                        {!isDetailScreen ? (
                            <IconButton
                                icon={<Icon as={IonIcons} name="chevron-forward-outline" size={8} color={"black"} />}
                                onPress={onClick}
                            />
                        ) : (
                            <Text style={styles.subtitle}>{`${item.type} | ${item.gender}`}</Text>
                        )}

                    </Stack>
                </Flex>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 12,
        fontStyle: "italic"
    }
})

export default CharacterItem;