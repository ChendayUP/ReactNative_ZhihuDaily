
import React, { Component, PropTypes } from 'react'
import LoadingView from '../components/LoadingView'

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

// const propTypes = {
//     countActions: PropTypes.object,
//     countObject: PropTypes.object.isRequired
// };


const { width, height } = Dimensions.get('window');

import * as urls from '../utils/URLS'
import request from '../utils/RequestUtil'

class CountView extends Component {

    constructor(props) {
        super(props)
        this.countAdd = this.countAdd.bind(this)
        this.countSub = this.countSub.bind(this)
        this.renderContent = this.renderContent.bind(this)
        this.renderListView = this.renderListView.bind(this)
        this.renderItem = this.renderItem.bind(this)
    }

    countAdd() {
        const { countActions } = this.props
        countActions.requestZhihuNews();
    }

    handleHotListData(json) {
        console.log(json)
    }

    countSub() {
        const { countActions } = this.props
        countActions.countSub();
    }

    renderContent() {
        const { isLoading } = this.props.zhihuNewsReducer;
        if (isLoading) {
            return <LoadingView />
        }
    }

    renderItem(news) {
        return (
            <TouchableOpacity onPress={() => this.onPress(news)}>
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
        const { zhihuNewsReducer } = this.props;
        if (zhihuNewsReducer.zhihuNews.length != 0) {
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            const data = ds.cloneWithRows(zhihuNewsReducer.zhihuNews)
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
        const { zhihuNewsReducer } = this.props
        return (
            <View style={styles.container}>
                {this.renderContent()}

                <TouchableHighlight style={styles.itemView} underlayColor="red" onPress={this.countAdd}>
                    <Text style={styles.itemText}>
                        {zhihuNewsReducer.zhihuNews.length}
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

// CountView.propTypes = propTypes

export default CountView