import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const LoginPage = () => {
    return (
        <div>
            hello
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