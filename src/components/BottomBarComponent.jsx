import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
    bottomBarContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around', alignItems: 'center'
    },
    button: {
        padding: 10
    }
});

const botttomBarList = [
    {
        slug: 'home',
        icon: 'home',
        size: 24
    },
    {
        slug: 'calendar',
        icon: 'calendar',
        size: 24
    },
    {
        slug: 'plus',
        icon: 'pluscircle',
        size: 40
    },
    {
        slug: 'chat',
        icon: 'message1',
        size: 24
    },
    {
        slug: 'user',
        icon: 'user',
        size: 24
    }

];

const BottomBarComponent = ({ selected, setSelected }) => {
    return (
        <View style={styles.bottomBarContainer}>
            {botttomBarList.map((i, index) => {
                return (
                    <TouchableOpacity style={styles.button} key={index}
                        onPress={() => {
                            setSelected(i.slug);
                        }}
                    >
                        <AntDesign name={i.icon} size={i.size} color={selected == i.slug ? "skyblue" : "white"} />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default BottomBarComponent;