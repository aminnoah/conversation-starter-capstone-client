import React from 'react'
import { Link } from 'react-router-dom'
import config from './config'
import TokenService from './services/TokenServices'


class CreateConvo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {},
            dataParams: {},
            formValidationError: ''
        }
    }

    componentDidMount() {
        let user_id = TokenService.getUserId()
        let currentUserToken = TokenService.getAuthToken()
        

        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }
    }

    handleInput() {}



    //enter assembly input from the user
    handleConvo = (e) => {
        e.preventDefault()
        let user_id = TokenService.getUserId()

        //create an object to store the search filters
        const data = {}

        //get all the form data from the form component
        const formData = new FormData(e.target)
        
        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1]
        }

       

        let { event_type, min_number_of_people, question, is_public} = data
        
        
        if (user_id == 1 || user_id == 2) {
            console.log('This is a public convo')
            is_public = true;
        }
        
        else {is_public = false}

        if (event_type === 'Select Event Type') {
            console.log('Event Type not selected')
            this.setState({
                formValidationError: ' Please select an Event Type !!'
            })
        }
        if (min_number_of_people === 'Select Minimum # of People') {
            console.log('How many people can you convo with?')
            this.setState({
                formValidationError: ' Please select a number of people'
            })
        }

        if (question === '') {
            console.log('Question not entered')
            this.setState({
                formValidationError: ' Please enter a question '
            })
        }

        let payloadTwo = {
            event_type, min_number_of_people, question, is_public
        }
        
       
        //else {
            //assigning the object from the form data to params in the state
            this.setState({
                params: payloadTwo,
                formValidationError: ''
            })

            //check if the state is populated with the search params data
            //console.log(this.state.params)

            // create payload and send it across we left of here!!!!
            let show_ok_for_fashion = false
            if (event_type == 'Fashion') {
                show_ok_for_fashion = true
            }
            let show_ok_for_entertainment = false
            if (event_type == 'Entertainment') {
                show_ok_for_entertainment = true
            }
            let show_ok_for_exercise = false
            if (event_type == 'Exercise') {
                show_ok_for_exercise = true
            }
            let show_ok_for_travel = false
            if (event_type == 'Travel') {
                show_ok_for_travel = true
            }
            let show_ok_for_technology = false
            if (event_type == 'Technology') {
                show_ok_for_technology = true
            }
            let show_ok_for_holidays = false
            if (event_type == 'Holidays') {
                show_ok_for_holidays = true
            }
            let show_ok_for_education = false
            if (event_type == 'Education') {
                show_ok_for_education = true
            }
            let show_ok_for_work = false
            if (event_type == 'Work') {
                show_ok_for_work = true
            }
            let show_ok_for_food = false
            if (event_type == 'Food') {
                show_ok_for_food = true
            }
            let show_ok_for_leisure = false
            if (event_type == 'Leisure') {
                show_ok_for_leisure = true
            }
            
            

            let payload = {
                user_id,
                question,
                is_favorited: false,
                is_public: is_public,
                min_number_of_people,
                ok_for_entertainment: show_ok_for_entertainment,
                ok_for_exercise: show_ok_for_exercise,
                ok_for_travel: show_ok_for_travel,
                ok_for_technology: show_ok_for_technology,
                ok_for_fashion: show_ok_for_fashion,
                ok_for_holidays: show_ok_for_holidays,
                ok_for_education: show_ok_for_education,
                ok_for_work: show_ok_for_work,
                ok_for_food: show_ok_for_food,
                ok_for_leisure: show_ok_for_leisure
                }
                

            const url = `${config.API_ENDPOINT}/convos`;

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
                    
                    this.setState({ ConvoValues: data })
                    
                    // this.props.updateNote(data);
                    // alert('Post added!');
                    // window.location = '/create-convo'
                })

                .catch((error) => {
                    console.log(error)
                    this.setState({ appError: error });
                });
        //}




    }


    render() {
        let showErrorOutput = ''
        if (this.state.formValidationError) {
            console.log(this.state.formValidationError)
            showErrorOutput = <div className='alert alert-info'>
                <i className='fas fa-info'></i>
                <strong>Info</strong>
                {this.state.formValidationError}
            </div>
        }
        return (
            <section className='create-convo clearfix'>

                <h2>Create a Convo</h2>
                <form className='convo-details' onSubmit={this.handleConvo}>
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
                                <select name="event_type" id="event_type" placeholder="Select Event Type">
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
                                <select name="min_number_of_people" id="min_number_of_people">
                                <option>Select Minimum # of People</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3+</option>
                                </select>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>What's your Convo?</div>
                                <input type="text" placeholder="Enter Convo"
                                name="question"
                                id="question"></input>
                            </div>
                        </div>
                    </div>
                    <div className='fullWidth'>
                        <div className='buttonWrapper clearfix'>
                            <button type='submit' className='myButton'>
                                Create Convo
                            </button>
                        </div>
                    </div>
                </form>
                {showErrorOutput}
                
            </section>
        )
    }

}

export default CreateConvo