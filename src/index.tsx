import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const Title = () => {
    return <h1> Hello Title component</h1>
}
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
            <Title />
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
