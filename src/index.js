import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor() {
        super();
        this.state = {inpt: window.localStorage.getItem("inpt")};
    };

    f = (event) => {
        this.setState({[event.target.name]: event.target.value});
        window.localStorage.setItem([event.target.name], event.target.value)
    };

    render() {
        return (
            <div>
                <input value={this.state.inpt}
                       name={'inpt'}
                       onChange={this.f} type="text" id="userInput"/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
