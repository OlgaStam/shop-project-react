import React from 'react'
import ReactDOM from 'react-dom/client'

// // React Element
// const title = React.createElement('h1', { id: 'title' }, 'Hello Aloha!')
// console.log('🚀 ~ title:', title)

// JSX

const app = (
    <div>
        <h1 id="text">Hello App</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            voluptas eaque sequi adipisci officia itaque nesciunt, vero
            perspiciatis, corrupti enim omnis voluptate. Autem, illo eius?
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
