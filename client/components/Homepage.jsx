import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import helper from '../utils';

import * as appActions from '../actions/AppActions';

function mapStateToProps(state) {
    return {
        model: state.app.model,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class GarantCalc extends React.Component {
    componentWillMount() {

    }
    render() {

        return (
            <div>test from Homepage</div>
        );
    }
}
