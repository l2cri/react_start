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
      this.props.appActions.startApp();
    }
    render() {
        let modelList = this.props.model;
        return (
            <div>
            {
                Object.keys(modelList).map(key =>
                    <div key={key}>{modelList[key].Name} - {modelList[key].Price}</div>
                )
            }
            </div>
        );
    }
}
