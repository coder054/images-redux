import React, { Component } from 'react'
import {finalizeLogin} from './../modules/auth'

import {connect} from 'react-redux'


class AuthHandler extends Component {

  componentDidMount = () => {
    console.log(this.props)
    this.props.finalizeLogin(window.location.hash, this.props.history)
    
  }
  
  render() {
    return (
      <div>
        AuthHandler
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  finalizeLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthHandler)

