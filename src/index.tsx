import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return (
        <div>
            <h1> Hello App component</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, ea.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, ea.
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
