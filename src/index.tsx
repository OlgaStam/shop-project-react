import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'

const Content = () => {
    return (
        <>
            <p className="red">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, ea.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, ea.
            </p>
        </>
    )
}
const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" num={1} />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
