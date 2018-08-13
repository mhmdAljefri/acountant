import React from 'react'
import { Switch, Route } from "react-router";
import Index from './ui/index'

export default () => {
  return (
    <Switch>
      <Route path='/orgs' component={Index}/>
    </Switch>
  )
}
