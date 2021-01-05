import React, { Component } from 'react'
import TokenService from './services/TokenServices'
import { Link } from 'react-router-dom'


class navbar extends Component {

    logOutClick = () => {
        console.log('Logging out')
        TokenService.clearAuthToken()
        TokenService.getUserId = (id) => {
            console.log(id)
        }

        window.location = '/'
    }

    render() {


        return (
            <header className='clearfix'>
                <Link><h4 to exact='/'>Convo-To-Go</h4></Link>
                {TokenService.hasAuthToken() ?
                    <nav className="nav">
                        <ul className='link'>
                            {/* <li>
                                <Link to="/landing">
                                    <i className="fas fa-question-circle"></i>
                                    <span className='navlink-text' alt='Support'>Support</span>
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/create-convo">
                                    <i className="fas fa-plus-circle"></i>
                                    <span className='navlink-text' alt='Create a Convo'>Create a Convo</span>
                                </Link>
                            </li>
                            <li>

                                <Link to="/homepage">
                                    <i className="fas fa-edit"></i>
                                    <span className='navlink-text'>HomePage</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.logOutClick}>
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span className='navlink-text'>Log Out</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    : ''}
            </header>
        )
    }
}

export default navbar