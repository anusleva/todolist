import React , {Component} from 'react'
import '../styles/InputForm.css'
import ListElement from './ListElement'


class InputForm extends Component {
    state = {
        needToDo: ''
    }

    submitButtonHandler = () => {
        this.setState({
            needToDo: document.getElementsByTagName('input')[0].value
        })
    }

    render() {
        return(
            <div>
                <input
                    type='text'
                    name='question'
                    placeholder='What is need to do?'
                />

                <button
                    type='submit'
                    onClick={this.submitButtonHandler}
                    className='buttonSubmit'
                > YEP! </button>
            </div>
        )
    }
}

export default InputForm