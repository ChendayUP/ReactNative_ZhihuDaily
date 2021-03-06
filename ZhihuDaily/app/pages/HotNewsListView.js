
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
    Image,
    Animated
} from 'react-native'

// const propTypes = {
//     countActions: PropTypes.object,
//     countObject: PropTypes.object.isRequired
// };


const { width, height } = Dimensions.get('window');

import * as urls from '../utils/URLs'
import request from '../utils/RequestUtil'

class HotNewsListView extends Component {

    constructor(props) {
        super(props)
        this.newsRequest = this.newsRequest.bind(this)
        this.renderContent = this.renderContent.bind(this)
        this.renderListView = this.renderListView.bind(this)
        this.renderItem = this.renderItem.bind(this)
    }

    newsRequest() {
        const { hotNewsListActions } = this.props
        hotNewsListActions.requestHotNewsList();
    }

    renderContent() {
        const { hotNewsListReducer } = this.props;
        if (hotNewsListReducer.isLoading) {
            return <LoadingView />
        }
    }

    jumpToDetailsList(news) {
        Actions.detailsList({ type: ActionConst.PUSH, news_id:news.news_id})
    }
    handleData(json) {
        console.log(jsbn);
    }

    renderItem(news) {
        return (
            <TouchableOpacity onPress={() => this.jumpToDetailsList(news)}>
                <View style={itemStyle.containerItem}>
                    <Image style={itemStyle.itemImg} source={{ uri: news.thumbnail }} />
                    <View style={itemStyle.itemRightContent}>
                        <Text style={itemStyle.title}>
                            {news.title}
                        </Text>
                        <View style={itemStyle.itemRightBottom}>
                            <Text style={itemStyle.userName}>
                                {news.news_id}
                            </Text>
                            {/**
                            <TimeAgo style={itemStyle.timeAgo} time={news.date} />
                            **/}
                        </View>

                    </View>
                </View>

            </TouchableOpacity>
        );
    }

    renderListView() {
        const { hotNewsListReducer } = this.props;
        if (hotNewsListReducer.hotNewsList.length != 0) {
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            const data = ds.cloneWithRows(hotNewsListReducer.hotNewsList)
            return <ListView
                dataSource={data}
                renderRow={this.renderItem}

            //refresh
            // refreshControl={
            //     <RefreshControl
            //         style={styles.refreshControlBase}
            //         refreshing={zhihuNewsReducer.isLoading}
            //         onRefresh={() => console.log("freshing........")}
            //         title="Loading..."
            //         colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
            //     />
            // }
            />
        }
    }

    render() {
        const { hotNewsListReducer } = this.props
        return (
            <View style={styles.container}>
                {this.renderContent()}

                <TouchableHighlight style={styles.itemView} underlayColor="red" onPress={this.newsRequest}>
                    <Text style={styles.itemText}>
                        {hotNewsListReducer.hotNewsList.length}
                    </Text>
                </TouchableHighlight>
                {this.renderListView()}
            </View>
        );
    }
}

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

export default HotNewsListView