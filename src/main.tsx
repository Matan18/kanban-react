import React from 'react'
import ReactDOM from 'react-dom'
import './default.scss'
import App from './App'
import { DragProvider } from './hooks/useDrag'

ReactDOM.render(
  <React.StrictMode>
    <DragProvider>
      <App />
    </DragProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
