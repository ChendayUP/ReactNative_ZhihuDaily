
import React from 'react';

import { connect } from 'react-redux';
import { Text, View, StyleSheet, Navigator } from 'react-native'

import { Router, Scene, ActionConst } from 'react-native-router-flux';


// import CountContainer from '../containers/countContainer';
// import YearContainerView from '../containers/yearContainer';

import hotNewsListContainer from '../containers/hotNewsListContainer'
import lastNewsListContainer from '../containers/lastNewsListContainer'
import detailsListContainer from '../containers/detailsContainer'

import TabIcon from '../components/TabIcon';

const RouterWithRedux = connect()(Router);

const getSceneStyle = (props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar
            ? 0
            : Navigator.NavigationBar.Styles.General.TotalNavHeight;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

class App extends React.Component {
    render() {
        return (
            <RouterWithRedux
                getSceneStyle={getSceneStyle}
                navigationBarStyle={styles.navBar}
                titleStyle={styles.navBarTitle} >
                <Scene key="root">
                    <Scene
                        key="hotNewsList"
                        component={hotNewsListContainer}
                        title="hotNewsList" />
                    <Scene
                        key="lastNewsList"
                        component={lastNewsListContainer}
                        title="lastNewsList" />
                    <Scene
                        key="detailsList"
                        component={detailsListContainer}
                        title="detailsList" />
                </Scene>
            </RouterWithRedux>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#3e9ce9'
    },
    navBarTitle: {
        color: '#fff',
        fontSize: 20
    }
});

export default App;
