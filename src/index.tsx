import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'Container/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Global, css } from '@emotion/react'
const globalStyles = css`
    a {
        text-decoration: none;
        color: inherit; /* Наследует цвет от родительского элемента */
    }
    a:visited {
        color: #fc95b5;
    }
    a.active {
        color: #ff00cf;
    }
`
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Global styles={globalStyles} />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
