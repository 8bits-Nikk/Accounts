import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';

const ListScreen = () => {


    const [Name, setName] = useState([
        { name: 'Nikhil' },
        { name: 'Ram' },
        { name: 'Sita' },
        { name: 'Alex' },
        { name: 'Alex 1' },
        { name: 'Alex 2' },
        { name: 'Alex 3' },
        { name: 'Alex 4' },
        { name: 'Alex 5' },
        { name: 'Alex 6' },
    ]);

    const onPressFlot = () => {
        Alert.alert("Comming Soon..");
    }

    return (

        <SafeAreaView style={Styles.body}>
            <StatusBar
                backgroundColor='#20232A' />

            <Text style={Styles.Header}> User Accounts</Text>
            <FlatList
                style={Styles.FlatList}
                data={Name}
                renderItem={({ item }) => (
                    <View style={Styles.Item}>
                        <Text style={Styles.Title}>{item.name}</Text>
                    </View>
                )}
            ></FlatList>
            <TouchableOpacity
                style={Styles.FlotButton}
                onPress={onPressFlot}>
                <Image source={require('C:/MyFiles/ReactNative/ProjectExamples/Accounts/assets/Cross.png')}
                ></Image>
            </TouchableOpacity>
        </SafeAreaView >
    );
}



const Styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#20232A',
    },
    Header: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#06BCEE',
        marginTop: 42,
        marginStart: 21,
    },
    Item: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        justifyContent: 'center',
        marginStart: 21,
        marginEnd: 21,
        marginBottom: 10,

    },
    Title: {
        fontSize: 20,
        color: '#4B4B4B',
        margin: 27,
        fontWeight: '600'
    },
    FlatList: {
        marginTop: 21,
    },
    FlotButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 66,
        position: 'absolute',
        bottom: 30,
        right: 30,
        height: 66,
        backgroundColor: '#06BCEE',
        borderRadius: 100,
    }
});

export default ListScreen;