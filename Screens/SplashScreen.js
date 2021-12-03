import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    TouchableOpacity,
    Button,
    Pressable,
} from 'react-native';

const Splash = ({ navigation }) => {

    React.useEffect(() => {
        setTimeout(onPressHandler, 2000);
    })

    const onPressHandler = () => {
        navigation.replace('Screen 2');
    }

    return (
        <SafeAreaView style={Styles.body}>
            <StatusBar
                backgroundColor='#20232A'
            />
            <Image source={require('C:/MyFiles/ReactNative/ProjectExamples/Accounts/assets/account.png')} />
            <Pressable
                onPress={onPressHandler}>
                <Text style={Styles.Text}>Accounts</Text>
            </Pressable>
        </SafeAreaView >
    );
}



const changeScreen = (navigation) => {
    navigation.replace('Screen 2');
}

const Styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#20232A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#06BCEE',
    }
});

export default Splash;