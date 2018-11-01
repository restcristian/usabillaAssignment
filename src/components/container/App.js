import React, {Component} from 'react';
import Header from '../presentational/Header/Header';

class App extends Component{
    state = {
        items:[]
    }
    render(){
        return(
            <Header title = "Dashboard" />
        );
    }
}

export default App;