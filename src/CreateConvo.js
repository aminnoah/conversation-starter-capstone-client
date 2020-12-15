import React from 'react'

import config from './config'
import TokenService from './services/TokenServices'


class CreateConvo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {},
            dataParams: {},
            formValidationError: '',
            intialDhrValues: {}
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

    //enter assembly input from the user
    handleConvo = (e) => {
        e.preventDefault()
        let currentUserId = TokenService.getUserId()

        //create an object to store the search filters
        const data = {}

        //get all the form data from the form component
        const formData = new FormData(e.target)

        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1]
        }

        console.log(data)

        const { convo_event_type, min_number_of_people, convo} = data

        console.log(convo_event_type, min_number_of_people, convo)

        if (convo_event_type === 'Select Event Type') {
            console.log('Event Type not selected')
            this.setState({
                formValidationError: ' Please select an Event Type !!'
            })
        }
        else if (min_number_of_people === 'Select Minimum # of People') {
            console.log('How many people can you convo with?')
            this.setState({
                formValidationError: ' Please select an Event Type !!'
            })
        }

        else if (convo === '') {
            console.log('serial number not selected')
            this.setState({
                formValidationError: ' Please select a serial number !!'
            })
        }

        else {
            //assigning the object from the form data to params in the state
            this.setState({
                params: data,
                formValidationError: ''
            })

            //check if the state is populated with the search params data
            console.log(this.state.params)

            // create payload and send it across we left of here!!!!

            const payload = { convo_event_type, min_number_of_people, convo, currentUserId };

            console.log(payload)

            const url = `${config.API_ENDPOINT}/createConvo`;

            fetch(url, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((res) => {
                    if (!res.ok) {
                        return res.json().then((error) => {
                            throw error;
                        });
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data)
                    this.setState({ ConvoValues: data })
                    console.log(this.state)
                    // this.props.updateNote(data);
                    // alert('Post added!');
                    // window.location = '/create-convo'
                })

                .catch((error) => {
                    this.setState({ appError: error });
                });
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

                <h2>Create a Convo</h2>
                <form className='equipment' onSubmit={this.handleAssembly}>
                    <div className='divTable blueTable media'>
                        <div className='divTableHeading'>
                            <div className='divTableRow'>
                                <div className='divTableHead'>Convo Identifiers</div>
                                <div className='divTableHead'>Details</div>
                            </div>
                        </div>

                        <div className='divTableBody'>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Convo Event Type</div>
                                <select name="dmr_no" id="dmr_no" placeholder="Select Event Type">
                                    <option>Select Event Type</option>
                                    <option>Entertainment</option>
                                    <option>Exercise</option>
                                    <option>Travel</option>
                                    <option>Technology</option>
                                    <option>Fashion</option>
                                    <option>Holidays</option>
                                    <option>Education</option>
                                    <option>Work</option>
                                    <option>Food</option>
                                    <option>Leisure</option>
                                </select>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Minimum Number of People</div>
                                <select name="device_name" id="device_name">
                                <option>Select Minimum # of People</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3+</option>
                                </select>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>What's your Convo?</div>
                                <input type="text" placeholder="Enter Convo"></input>
                            </div>
                        </div>
                    </div>
                    <div className='fullWidth'>
                        <div className='buttonWrapper clearfix'>
                            <button type='submit' className='myButton'>Create Convo</button>
                        </div>
                    </div>
                </form>
                {showErrorOutput}
                
            </section>
        )
    }

}

export default CreateConvo