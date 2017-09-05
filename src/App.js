import React, { Component } from 'react';
import logo from './logo.svg';
import User from './components/users'

class App extends Component {
    render() {
        return ( 
            <div className = "App" >
                <div className = "App-header" >
                    <img src = { logo }
                      className = "App-logo"
                      alt = "logo" / >
                </div>
                <User />
            </div>
        );
    }
}

export default App;