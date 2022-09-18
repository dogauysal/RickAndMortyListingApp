import { Box, HStack, Icon, Text } from 'native-base';
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons';

interface IProps {
    status: string;
    species: string;
}

const CharacterStatus: React.FC<IProps> = ({
    status,
    species
}) => {

    const renderStatus = () => {
        switch (status) {
            case "Alive":
                return <Text><Icon as={IonIcons} name='ellipse' size={4} color="green.600" /> Alive - {species}</Text>
            case "Dead":
                return <Text><Icon as={IonIcons} name='ellipse' size={4} color="red.600" /> Dead - {species}</Text>
            default:
                return <Text><Icon as={IonIcons} name='ellipse' size={4} color="gray.600" /> Unknown - {species}</Text>
        }
    }

    return (
        <HStack alignItems={"center"} >
            <Box>
                {renderStatus()}
            </Box>
        </HStack>
    )
}

export default CharacterStatus;