import React from 'react'
import {Link} from 'react-router-dom'
import config from './config'
import TokenService from './services/TokenServices'


class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {},
            formValidationError: ''
        }
    }

    componentDidMount() {
        let currentUserId = TokenService.getUserId()
        let currentUserToken = TokenService.getAuthToken()
        console.log(currentUserId, currentUserToken)
        console.log(TokenService.hasAuthToken())

        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }
    }

    render() {
        let showErrorOutput = ''
        if (this.state.formValidationError) {
            showErrorOutput = <div className='alert alert-info'>
                <i className='fas fa-info'></i>
                <strong>Info</strong>
                {this.state.formValidationError}
            </div>
        }
        return (
            <section className='sign-in'>
                <h1>Welcome to Convo-To-Go</h1>
                <p>This application was created to fulfill the need to create conversation anywhere, anytime! How often do you find yourself in a place or at an event and can't find the words to start a conversation? This application, upon registration and login, allow you to pick from a number of event types and select the 'convo' that is best for your situation. So What are you waiting for? Go converse!</p>
                    <div className='form-item'>
                        <button className='myButton'
                        ><Link to="/signin">Sign-In</Link></button>
                    </div>
                    <div className='form-item'>
                        <button className='myButton'><Link to="/registration">Register</Link></button> 
                    </div>
            
            </section>
        )
    }
}

export default LandingPage