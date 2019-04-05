// export default function withSubscription(WrappedComponent, selectData) {

//   return class extends React.Component {
//     componentDidMount() {
//       this.shouldNavigateAway();
//     }

//     componentDidUpdate() {
//       this.shouldNavigateAway();
//     }

//     shouldNavigateAway() {
//       if (!this.props.auth) {
//         this.props.history.push('/');
//       }
//     }

//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   };
// }

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway()
    }

    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.changePage()
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.token }
  }
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        changePage: () => push('/')
      },
      dispatch
    )

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComposedComponent)
}
