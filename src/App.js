import React, { Component } from 'react'

class App extends Component {

  state = {
      people: []
  }

  render() {
    return (<div>
            {this.state.people.map((person, id) => <h3 key={id}>{person.name}</h3>)}
            </div>
    )}

  componentDidMount() {
       fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
//.then(resp => console.log(resp))
      .then(resp =>  this.setState({ people: resp.people }))

  }
}

export default App
