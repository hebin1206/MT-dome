/**
 * Created by QJX on 2017/4/25.
 */
import  React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import RouterState from '../../router/RouteProvider';

export default class Home extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    RouterState.goto({id: page1})
                }}>
                    <Text >1234</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
