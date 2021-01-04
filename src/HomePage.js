import React from 'react'
import { Link } from 'react-router-dom'
import config from './config'
import TokenService from './services/TokenServices'


export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            privateConvos: [],
            formValidationError: ''
        }
    }

    componentDidMount() {
        let user_id = TokenService.getUserId()
        let currentUserToken = TokenService.getAuthToken()
        console.log(user_id, currentUserToken)
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
            <section className='create-convo clearfix'>

                <h2>Home Page</h2>
                <div className='divTable blueTable media'>
                        <div className='divTableHeading'>
                            <div className='divTableRow'>
                                <div className='divTableHead'>Convo Events</div>
                                {/* <div className='divTableHead'>Created Convos</div> */}
                            </div>
                        </div>
                        
                        <div className='divTableBody'>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                <Link to="/convo-event-list/education">Education</Link>
                                </div>
                                {/* <div className='divTableCell'></div> */}
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                <Link to="/convo-event-list/entertainment">
                                    Entertainment
                                    </Link>
                                </div>
                                {/* <div className='divTableCell'>

                                </div> */}
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                    <Link to="/convo-event-list/exercise">
                                        Exercise
                                    </Link>    
                                    </div>
                                {/* <div className='divTableCell'></div> */}
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                <Link to="/convo-event-list/fashion">
                                    Fashion
                                </Link>    
                                </div>
                                {/* <div className='divTableCell'></div> */}
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                <Link to="/convo-event-list/food">
                                    Food
                                </Link>    
                                </div>
                                {/* <div className='divTableCell'></div> */}
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                <Link to="/convo-event-list/holidays">
                                    Holidays
                                </Link>
                                </div>
                                {/* <div className='divTableCell'></div> */}
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                <Link to="/convo-event-list/leisure">
                                Leisure</Link>
                                </div>
                                {/* <div className='divTableCell'></div> */}
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                <Link to="/convo-event-list/technology">
                                    Technology
                                    </Link>
                                    </div>
                                {/* <div className='divTableCell'></div> */}
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                <Link to="/convo-event-list/travel">    
                                    Travel
                                    </Link>
                                    </div>
                                {/* <div className='divTableCell'></div> */}
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                <Link to="/convo-event-list/work">
                                    Work
                                    </Link>
                                    </div>
                                {/* <div className='divTableCell'></div> */}
                            </div>
                        </div>
                    </div>

                {showErrorOutput}
                
            </section>
        )
    }
}

