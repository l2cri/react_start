import React, { Component } from 'react'
import '../styles/app.css'
import { Link } from 'react-router'

export default class AppContainer extends Component {
    render() {

        return (
            <div className="tabs tabs_programs page_main__programs programs">
                <div className="tabs__wrapper">
                    <Link to='/credit/'>Admin</Link>
                    <Link  to='/credit/model/'>User</Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}
