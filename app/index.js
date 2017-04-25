/**
 * Created by QJX on 2017/4/25.
 */


import  React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import { Home, Order, Mine, Merchant} from './view/index'
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'团购',
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '团购'}
                        title="团购"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../src/img/tabbar/pfb_tabbar_homepage_selected@2x.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../src/img/tabbar/pfb_tabbar_homepage@2x.png")} />}
                        onPress={() => this.setState({ selectedTab: '团购' })}>
                        <Home/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '附近'}
                        title="附近"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../src/img/tabbar/pfb_tabbar_merchant_selected@2x.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../src/img/tabbar/pfb_tabbar_merchant@2x.png")} />}
                        onPress={() => this.setState({ selectedTab: '附近' })}>
                        <Merchant/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '订单'}
                        title="订单"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../src/img/tabbar/pfb_tabbar_order_selected@2x.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../src/img/tabbar/pfb_tabbar_order@2x.png")} />}
                        onPress={() => this.setState({ selectedTab: '订单' })}>
                        <Order/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../src/img/tabbar/pfb_tabbar_mine_selected@2x.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../src/img/tabbar/pfb_tabbar_mine@2x.png")} />}
                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        <Mine/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "#999999",
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    }
});
export default App;