import { observer } from "mobx-react";
import { HStack, Icon, IconButton, Stack, View } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import IonIcons from 'react-native-vector-icons/Ionicons';
import { RootStoreContext } from "../../stores/rootStore";
import PageNumber from "../character/PageNumber";


const Pagination = () => {
    const rootStore = useContext(RootStoreContext);
    const { setCurrentPage, currentPage, totalPages } = rootStore.locationStore;

    const [pages, setPages] = useState<number[]>([])

    useEffect(() => {
        renderItems()
    }, [totalPages])

    const renderItems = () => {

        let numbersOnScreen: number[] = []

        for (let i = 1; i <= totalPages; i++) {
            if (i == 1) {
                numbersOnScreen.push(i)
            } else {
                if (currentPage - 1 == i) {
                    numbersOnScreen.push(i)
                } else if (i == currentPage) {
                    numbersOnScreen.push(i)
                } else if (i - 1 == currentPage) {
                    numbersOnScreen.push(i)
                } else if (i == totalPages) {
                    if (numbersOnScreen.indexOf(totalPages) < 0) {
                        numbersOnScreen.push(totalPages)
                    }
                }
            }
        }

        setPages(numbersOnScreen)
    }

    const changePageNumber = (value: number) => {
        setCurrentPage(value)
    }

    const renderPageNumber = (p: number) => {
        if (p > currentPage + 1) {
            return (
                <><Text>..</Text><PageNumber value={p} selected={p == currentPage ? true : false} onPress={() => changePageNumber(p)} /></>
            )
        } else if (p < currentPage - 1) {
            return (<><PageNumber value={p} selected={p == currentPage ? true : false} onPress={() => changePageNumber(p)} /><Text>..</Text></>)
        } else {
            return <PageNumber value={p} selected={p == currentPage ? true : false} onPress={() => changePageNumber(p)} />
        }
    }

    return (
        <HStack py={5} justifyContent={"center"}>
            <Stack>
                <IconButton
                    disabled={currentPage == 1}
                    icon={<Icon as={IonIcons} name="chevron-back-outline" size={6} color={"black"} />}
                    onPress={() => changePageNumber(currentPage - 1)}
                />
            </Stack>
            <HStack alignSelf={"center"}>
                {pages.map(p => renderPageNumber(p))}
            </HStack>
            <Stack>
                <IconButton
                    disabled={currentPage == totalPages}
                    icon={<Icon as={IonIcons} name="chevron-forward-outline" size={6} color={"black"} />}
                    onPress={() => changePageNumber(currentPage + 1)}
                />
            </Stack>
        </HStack >
    )
}

export default observer(Pagination);