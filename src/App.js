// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        list: []
    }

    render() {
        return(
            <div>
                {this.state.list.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }

    componentDidMount () {
        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(({people}) => this.setState({ peopleInSpace: people }))
    }

}

export default App