import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './Navigator'
import { Persistor, Store } from './Redux/store'


export default class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}

