import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element
const title = React.createElement('h1', { id: 'title' }, 'Hello Aloha!')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{title}</React.StrictMode>)
