
import React from 'react';

import { connect } from 'react-redux';
import { Text, View, StyleSheet, Navigator } from 'react-native'

import { Router, Scene, ActionConst } from 'react-native-router-flux';


// import CountContainer from '../containers/countContainer';
// import YearContainerView from '../containers/yearContainer';

import hotNewsListContainer from '../containers/hotNewsListContainer'
import newsListContainer from '../containers/newsListContainer'
import detailsListContainer from '../containers/detailsContainer'
import styleTest from '../pages/StyleTestView'

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
                        key="styleTest"
                        component={styleTest}
                        title="styleTest" />
                
                    <Scene
                        key="newsList"
                        component={newsListContainer}
                        title="newsList" />
                    <Scene
                        key="hotNewsList"
                        component={hotNewsListContainer}
                        title="hotNewsList" />
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
