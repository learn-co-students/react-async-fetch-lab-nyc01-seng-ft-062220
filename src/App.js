// create your App component here
import React from "react"

class App extends React.Component {

    state = {
        people: ""
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(console.log())
        
    }

    render() {
        return (
            <h1>Hi</h1>
        )
    }

}

export default App