
import React, { Component, PropTypes } from 'react'
import LoadingView from '../components/LoadingView'
import { Actions } from 'react-native-router-flux';

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

class NewsListView extends Component {

    constructor(props) {
        super(props)
        this.newsRequest = this.newsRequest.bind(this)
        this.renderContent = this.renderContent.bind(this)
        this.renderListView = this.renderListView.bind(this)
        this.renderItem = this.renderItem.bind(this)
    }

    componentWillMount() {
        const { newsListActions } = this.props
        newsListActions.requestLatestNewsList();
    }

    componentDidMount() {

    }

    newsRequest() {

    }

    renderContent() {
        const { newsListReducer } = this.props;
        if (newsListReducer.isHeadLoading || newsListReducer.isFootLoading) {
            return <LoadingView />
        }
    }

    jumpBack() {
        Actions.pop;
    }

    renderItem(news, sectionId, rowId) {
        return (
            <TouchableOpacity onPress={Actions.pop}>
                <View style={itemStyle.containerItem}>
                    <Image style={itemStyle.itemImg} source={{ uri: news.images[0] }} />
                    <View style={itemStyle.itemRightContent}>
                        <Text style={itemStyle.title}>
                            {news.title}
                        </Text>
                        <View style={itemStyle.itemRightBottom}>
                            <Text style={itemStyle.userName}>
                                {news.news_id}
                            </Text>

                            {/**
                                 <TimeAgo style={itemStyle.timeAgo} time="20170101" />
                                **/}
                        </View>

                    </View>
                </View>

            </TouchableOpacity>
        );
    }

    // renderHeader() {
    //     return (<Text>11111</Text>);
    // }

    renaderSectionHeader(data, sectionId) {
        const { dateList } = this.props.newsListReducer;
        return (<Text>this is header {dateList[sectionId]}</Text>)
    }

    renderListView() {
        const { dateList, storiesList, top_storiesList } = this.props.newsListReducer;
        if (storiesList && storiesList.length != 0) {
            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            });
            const data = ds.cloneWithRowsAndSections(storiesList)

            return <ListView
                dataSource={data}
                renderRow={this.renderItem}

                //refresh
                refreshControl={
                    <RefreshControl
                        style={styles.refreshControlBase}
                        refreshing={this.props.newsListReducer.isHeadLoading}
                        onRefresh={this.reloadData.bind(this)}
                        title="Loading..."
                        colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
                    />
                }
                renderFooter={this.renderFooter.bind(this)}
                renderSectionHeader={this.renaderSectionHeader.bind(this)}
                onEndReached={this.onEndReached.bind(this)}
            // onEndReachedThreshold={0}
            />
        }
    }

    onEndReached() {
        const { newsListActions } = this.props
        const { isFootLoading, dateList } = this.props.newsListReducer

        if (!isFootLoading) {
            newsListActions.requestBeforeNewsList(dateList[dateList.length - 1]);
        }
    }

    renderFooter() {

        if (this.state && this.state.isShowBottomRefresh) {
            return (<View style={{ marginVertical: 10 }}>
                <ActivityIndicator />
            </View>);
        }
        return <View style={{ marginVertical: 10 }} />;;
    }

    reloadData() {
        const { isHeadLoading } = this.props.newsListReducer
        if (!isHeadLoading) {
            const { newsListActions } = this.props
            newsListActions.requestLatestNewsList();
        }
    }

    render() {
        const { dateList, storiesList, top_storiesList } = this.props.newsListReducer;
        var storiesSize = 0;
        if (!storiesList) {
            storiesSize = 0;
        } else {
            storiesSize = storiesList.length;
        }
        return (
            <View style={styles.container}>
                {/**this.renderContent()**/}

                <TouchableHighlight style={styles.itemView} underlayColor="red" onPress={this.newsRequest}>
                    <Text style={styles.itemText}>
                        current section count is :  {storiesSize}
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

export default NewsListView