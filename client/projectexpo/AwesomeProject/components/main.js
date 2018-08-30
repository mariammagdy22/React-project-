import React, { Component } from 'react';
import { NativeRouter, Route, Link } from 'react-router-native'


//import all components(screens only)
import LoginUser from './components/login';
import { View } from './C:/Users/Mayoya/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';


export default class Main extends React.Component {

    render() {
        return (
            <NativeRouter>
                <View>
                    <View>
                        <Link to="/login">
                            <Text>test</Text>
                        </Link>
                    </View>
                    <Route exact path="/" component={Main} />
                    <Route path="/login" component={LoginUser} />
                    
                </View>
            </NativeRouter>
        );
    };
};
/*
const styles = StyleSheet.create({
    textt: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    }
}
*/