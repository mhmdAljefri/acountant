import React, { Component } from 'react'

/**
 * 
 */
export default (EnhancedComponent) =>
  class componentName extends Component {
    render() {
      return (
        <EnhancedComponent />
      )
    }
  }
