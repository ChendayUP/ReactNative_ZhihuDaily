
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
    WebView
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

    render() {
        const { detailsReducer } = this.props;
        var load = (detailsReducer.isLoading) ?
            (<LoadingView />) :
            (<Detail data={detailsReducer.details} />);
        return (
            <View style={commonStyles.container}>
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
        return (
            <WebView
                source={{ uri: this.props.data }}
            />
        );
    }
}

var commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
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