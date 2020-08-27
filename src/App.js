// create your App component here
import React from 'react'

class App extends React.Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(dataObj => {
            console.log(dataObj.people)
        })
    }

    render() {
        return (
            <div>
                PRIVET
            </div>
        )
    }

}

export default App
