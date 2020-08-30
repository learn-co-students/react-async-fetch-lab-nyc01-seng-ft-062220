// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        people: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(people => this.setState({people: people.people}))
    }
    render() {
        return(
           <div>
               {this.state.people.map((peopleObj) => <h1> key={peopleObj.id} name ={peopleObj.name}</h1> )}
           </div>
        )
    }
}

export default App 