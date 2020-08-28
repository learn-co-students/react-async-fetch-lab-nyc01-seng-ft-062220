// create your App component here
import React, { Component } from 'react';

class App extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        fetch(`http://api.open-notify.org/astros.json`)
        .then(r => r.json())
        .then(data => this.setState({data: data['people']}))
    }
    
    renderData = () => {
        return this.state.data.map(person => <li>{person.name}</li>)
    }

    render() {
        return (
            <div>
                <h1>People in space!</h1>
                {this.state.data ? this.renderData() : null}
            </div>
        );
    }
}

export default App;
