import React, {Component} from 'react'
import '../styles/app.css'
import Container from './Container'

class App extends Component {
    render() {
        return(
            <div className='wrapper'>
                <h1>ToDo List</h1>
                <Container />
            </div>
        )
    }
}

export default App