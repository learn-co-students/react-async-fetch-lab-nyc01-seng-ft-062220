import React from 'react';

class App extends React.Component {

    state = {
        people: []
    }

    list = () => this.state.people.map(person => <li>{person.name}{person.craft}</li>)

    render(){
        return(
            <React.Fragment>
                <h1>hellos</h1>
                <ul>
                    {this.list()}
                </ul>
            </React.Fragment>
        )
    }

    async componentDidMount(){
        let response = await fetch("http://api.open-notify.org/astros.json");
        let data = await response.json();
        this.setState({people: data.people});
    }

}

export default App;