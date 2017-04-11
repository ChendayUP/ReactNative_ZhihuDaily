
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
    Animated,
    WebView,
    ScrollView
} from 'react-native'

const { width, height } = Dimensions.get('window');

import * as urls from '../utils/URLs'
import request from '../utils/RequestUtil'

class DetailsListView extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { detailsActions, news_id } = this.props
        detailsActions.requestDetailsList(news_id);
    }

    onRefresh() {
        console.log('top')
    }

    onEndReached() {
        console.log('end')
    }

    render() {
        const { detailsReducer } = this.props;
        var load = (detailsReducer.isLoading) ?
            (<LoadingView />) :
            (<Detail data={detailsReducer.details} />);
        return (
            <View
                style={commonStyles.container}
                onRefresh={this.onRefresh.bind(this)}
                onEndReached={this.onEndReached.bind(this)}
            >
                {load}
            </View>
        );
    }
}

class Detail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const details = this.props.data;
        const cssType = details.css[0];
        const body = details.body;
        const htmlString = "<html><head><link rel=\"stylesheet\" href=\"" +
            cssType + "\"></head><body>" +
            body + "</body></html>";
        const a = htmlString;
        return (
            <WebView source={{ html: htmlString }} />
        );
    }
}

var commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    topImage: {
        flex: 1,
        marginTop: 0
    },
    flexOne: {
        flex: 1
    },
    load: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview: {
        flex: 1
    },
    separator: {
        height: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#dddddd'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 10
    }
});

export default DetailsListView