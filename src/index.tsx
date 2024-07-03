import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'
// import BlaBla from './Content' - дефолтный экспорт как хочешь назови
import { Content } from './Content'
const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" num={1} />

            {/* дефолтный экспорт как хочешь назови */}
            {/* <BlaBla p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, pariatur suscipit? Autem sit facere laborum harum tempore similique, voluptatem saepe enim cumque explicabo magni reprehenderit sequi molestias laboriosam. Id, illum quidem? Provident minima adipisci officia! Et dolorem enim quibusdam adipisci libero minima eligendi, doloremque harum excepturi magnam vero quos labore?" /> */}

            <Content p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, pariatur suscipit? Autem sit facere laborum harum tempore similique, voluptatem saepe enim cumque explicabo magni reprehenderit sequi molestias laboriosam. Id, illum quidem? Provident minima adipisci officia! Et dolorem enim quibusdam adipisci libero minima eligendi, doloremque harum excepturi magnam vero quos labore?" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
