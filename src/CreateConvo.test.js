import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CreateConvo from './CreateConvo'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <CreateConvo />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})