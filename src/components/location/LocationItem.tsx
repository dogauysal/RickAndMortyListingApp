import { Box, Center, Flex, HStack, Icon, IconButton, Text, VStack } from "native-base"
import React, { useEffect } from "react"
import Location from "../../models/location/Location"
import IonIcons from 'react-native-vector-icons/Ionicons';

interface IProps {
    item: Location
    onClick: () => void;
}

const LocationItem: React.FC<IProps> = ({
    item,
    onClick
}) => {


    return (
        <Box >
            <Box pl="2" pr="2" py="2">
                <Flex
                    direction="row"
                    borderWidth={1}
                    borderRadius={20}
                    px={3}
                    py={2}
                >
                    <VStack flex={5}>
                        <Flex direction="row">
                            <Box flex={1}>
                                <Text style={{ fontWeight: "bold" }}>Name:</Text>
                            </Box>
                            <Box flex={1}>
                                <Text>{item.name}</Text>
                            </Box>
                        </Flex>
                        <Flex direction="row" >
                            <Box flex={1}>
                                <Text style={{ fontWeight: "bold" }}>Type:</Text>
                            </Box>
                            <Box flex={1}>
                                <Text>{item.type}</Text>
                            </Box>
                        </Flex>
                        <Flex direction="row" >
                            <Box flex={1}>
                                <Text style={{ fontWeight: "bold" }}>Dimension:</Text>
                            </Box>
                            <Box flex={1}>
                                <Text>{item.dimension}</Text>
                            </Box>
                        </Flex>
                        <Flex direction="row" >
                            <Box flex={1}>
                                <Text style={{ fontWeight: "bold" }}>Resident count:</Text>
                            </Box>
                            <Box flex={1}>
                                <Text>{item.residents.length}</Text>
                            </Box>
                        </Flex>
                    </VStack>
                    <HStack flex={1}>
                        <VStack justifyContent="center" >
                            <IconButton
                                icon={<Icon as={IonIcons} name="chevron-forward-outline" size={10} />}
                                onPress={() => onClick()}
                            />
                        </VStack>
                    </HStack>
                </Flex>
            </Box>
        </Box >
    )
}

export default LocationItem