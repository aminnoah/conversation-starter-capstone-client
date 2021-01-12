import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import ConvoEventList from './ConvoEventList'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <ConvoEventList />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})