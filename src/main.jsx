import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container mx-auto bg-stone-100 shadow-3xl'>
      <App />
    </div>
  </React.StrictMode>,
)
