
import React, { Component, PropTypes } from 'react'
import LoadingView from '../components/LoadingView'
import { Actions, ActionConst } from 'react-native-router-flux';

import {
    Button,
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    ListView,
    RefreshControl,
    TimeAgo,
    Platform,
    TouchableOpacity,
    Image
} from 'react-native'

const { width, height } = Dimensions.get('window');

import * as urls from '../utils/URLs'
import request from '../utils/RequestUtil'

class StyleTestView extends Component {

    render() {
        return (
            <View style={mStyle.container}>
                <View style={mStyle.container}>
                    <View style={mStyle.viewStyle1} />
                    <View style={mStyle.viewStyle2} />
                    <View style={mStyle.viewStyle3} />
                    <View style={mStyle.viewStyle1} />
                    <View style={mStyle.viewStyle2} />
                    <View style={mStyle.viewStyle3} />
                    <View style={mStyle.viewStyle1} />
                    <View style={mStyle.viewStyle2} />
                    <View style={mStyle.viewStyle3} />
                    <View style={mStyle.viewStyle1} />
                    <View style={mStyle.viewStyle2} />
                    <View style={mStyle.viewStyle3} />
                </View>
            </View>
        );
    }
}

const mStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: "wrap"
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    viewStyle1: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue'
    },
    viewStyle2: {
        width: 50,
        height: 50,
        backgroundColor: 'steelblue'
    },
    viewStyle3: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue'
    },

    bigblue: {
        backgroundColor: 'gray',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        flex: 1,
        color: 'red',
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginTop: 20,
    },
    itemView: {
        backgroundColor: 'grey',
        height: 44,
        width: width,
        justifyContent: 'center',
        marginTop: 10,
    },
    itemText: {
        fontSize: 15,
        color: '#ffffff',
        textAlign: 'left',
        marginLeft: 20,
    },
});

const itemStyle = StyleSheet.create({
    base: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: Platform.OS === 'ios' ? 10 : 0
    },
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: 'black'
    },
    listView: {
        backgroundColor: '#eeeeec'
    },
    no_data: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
    },
    drawerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    drawerTitleContent: {
        height: 120,
        justifyContent: 'flex-end',
        padding: 20,
        backgroundColor: '#3e9ce9'
    },
    drawerIcon: {
        width: 30,
        height: 30,
        marginLeft: 5
    },
    drawerTitle: {
        fontSize: 20,
        textAlign: 'left',
        color: '#fcfcfc'
    },
    drawerText: {
        fontSize: 18,
        marginLeft: 15,
        textAlign: 'center',
        color: 'black'
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    footerText: {
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 10
    },
    itemImg: {
        width: 88,
        height: 66,
        marginRight: 10
    },
    itemRightContent: {
        flex: 1,
        flexDirection: 'column'
    },
    itemRightBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        flex: 1,
        fontSize: 14,
        color: '#87CEFA',
        marginTop: 5,
        marginRight: 5
    },
    timeAgo: {
        fontSize: 14,
        color: '#aaaaaa',
        marginTop: 5
    },
    refreshControlBase: {
        backgroundColor: 'transparent'
    },
    tab: {
        paddingBottom: 0
    },
    tabText: {
        fontSize: 16
    },
    tabBarUnderline: {
        backgroundColor: '#3e9ce9',
        height: 2
    }
});

export default StyleTestView