import React from 'react'
import ReactDOM from 'react-dom/client'

// // React Element
// const title = React.createElement('h1', { id: 'title' }, 'Hello Aloha!')
// console.log('🚀 ~ title:', title)

// JSX

const app = <h1 id="text">Hello App</h1>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
