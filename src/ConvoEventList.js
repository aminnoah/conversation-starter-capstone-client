import React from 'react'

import config from './config'
import TokenService from './services/TokenServices'


export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          convosInList: [],
            error: ''
        }
    }

    componentDidMount() {
        let user_id = TokenService.getUserId()
        let currentUserToken = TokenService.getAuthToken()
        

        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }
        const eventName = this.props.match.params.meta;
   
        let getConvosByUserAndEventListUrl = `${config.API_ENDPOINT}/convos/by-user-end-list-type/${user_id}/${eventName}`;
        
        fetch(getConvosByUserAndEventListUrl)
            .then((convosInList) => convosInList.json())
            .then((convosInList) => {
                this.setState({
                  convosInList: convosInList,
                });

            })

            .catch((error) => this.setState({ error }));
    }
    render() {

        const capitalize = (s) => {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
          }
        // console.log(this.state.convosInList.length)
        let showItemsPage = ''
        //by default show there are no items
        if (this.state.convosInList.length === 0) {
            showItemsPage = <p>No items here</p>
        }
        // if there are items 
        else {

            // display details for each one of the items
            showItemsPage = this.state.convosInList.map((item, key) => {
                if (item) {
                    return (
                    <div className='divTableBody'>    
                    <div className='divTableRow' key = {key}> 
                        <div className='divTableCell'>
                            <div>{item.question} </div>
                        </div>
                      
                        <div className='divTableCell'>
                            <div>{item.min_number_of_people} </div>
                            <div>{item.is_favorited} </div>
                            <div>{item.is_public} </div>
                        </div>
                    </div>
                    </div>
                    )
                }
            })
        }

        const eventName = capitalize(this.props.match.params.meta);
        //for (let i = 0; i < )
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

                <h2>{eventName} Convos</h2>
                <div className='divTable blueTable media'>
                        <div className='divTableHeading'>
                            <div className='divTableRow'>
                                <div className='divTableHead'>
                                    {eventName}
                                </div>
                                <div className='divTableHead'>
                                    Minimum Number of People
                                </div>
                            </div>
                        </div>
                       {showItemsPage}    
                </div>

                {showErrorOutput}
                
            </section>
        )
    }
}

