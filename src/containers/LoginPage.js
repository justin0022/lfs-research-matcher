import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const LoginPage = () => {
    return (
        <div>
            <h2>Login Page</h2>
        </div>
    )
}

const mapStateToProp = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(
    mapStateToProp, 
    mapDispatchToProps
)(LoginPage)