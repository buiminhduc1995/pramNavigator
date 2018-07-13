/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, FlatList, TouchableOpacity, TextInput
} from 'react-native';
import Data from './Data'

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <FlatList style={styles.FlatList}
                    data={Data}
                    renderItem={
                        ({ item }) => (
                            <View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detail', { id: item.id, Name: item.Name, Age: item.Age, School: item.School })}>
                                    <Text>{item.Name}</Text>
                                </TouchableOpacity>
                            </View>)} />
                <View style={styles.TextInput}>
                <TextInput style={{width: 100,}} placeholder="ID"/>
                <TextInput style={{width: 100,}} placeholder="Name"/>
                <TextInput style={{width: 100,}} placeholder="Age"/>
                <TextInput style={{width: 100,}} placeholder="School"/>
                <TouchableOpacity><Text>Thêm</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    TextInput:{
        flex:5
    },
    FlatList:{
        height: 100,
        width: 100,
    }

});
