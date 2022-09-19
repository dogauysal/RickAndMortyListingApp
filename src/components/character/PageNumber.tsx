import { Box, Text } from "native-base"
import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
interface IProps {
    value: number
    selected: boolean
    onPress: () => void
}

const PageNumber: React.FC<IProps> = ({
    value,
    selected,
    onPress
}) => {

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <Box style={[styles.container, selected ? styles.selected : {}]}>
                <Text style={selected ? styles.selectedText : styles.text}>{value}</Text>
            </Box>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        width: 24,
        height: 24,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 4
    },
    selected: {
        backgroundColor: "black",
    },
    text: {
        fontSize: 12,
        color: "black"
    },
    selectedText: {
        fontSize: 12,
        color: "white"
    }

})

export default PageNumber