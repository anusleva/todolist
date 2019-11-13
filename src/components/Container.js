import React , {Component} from 'react'
import '../styles/container.css'
import InputForm from  './InputForm'



class Container extends Component {
    render() {
        return(
            <div className='container'>
                <InputForm />
            </div>
        )
    }
}


export default Container