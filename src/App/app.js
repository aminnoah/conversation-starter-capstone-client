import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import config from '../config'
import './App.css'


class App extends Component {
  state = {
    convos: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/convos`),

    ])
      .then(([convosRes]) => {
        if (!convosRes.ok)
          return convosRes.json().then(e => Promise.reject(e))

        return Promise.all([
          convosRes.json(),
        ])
      })
      .then(([convos]) => {
        this.setState({ convos })
      })
      .catch(error => {
        console.error({ error })
      })
  }


  handleAddConvo = note => {
    this.setState({
      notes: [
        ...this.state.convos,
        convo
      ]
    })
  }

  handleDeleteConvo = convoid => {
    this.setState({
      notes: this.state.convos.filter(convo => convo.id !== convoid)
    })
  }

  renderNavRoutes() {
    return (
      <>
        <Route
          path='/convos/:convoid'
          component={ConvoPageNav}
        />
        <Route
          path='/add-note'
          component={ConvoPageNav}
        />
      </>
    )
  }

  renderMainRoutes() {
    return (
      <>
        <Route
          path='/convo/:convoid'
          component={ConvoPageMain}
        />
        <Route
          path='/add-convo'
          component={AddConvo}
        />
      </>
    )
  }

  render() {
    const value = {
      convos: this.state.convos,
      AddConvo: this.handleAddConvo,
      deleteConvo: this.handleDeleteConvo,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <nav className='App__nav'>
            {this.renderNavRoutes()}
          </nav>
          <header className='App__header'>
            <h1>
              <Link to='/'>Convo-To-Go</Link>
              {' '}
              <FontAwesomeIcon icon='check-double' />
            </h1>
          </header>
          <main className='App__main'>
            {this.renderMainRoutes()}
          </main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App