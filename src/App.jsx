import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Message from './containers/Message'
import ProductController from './containers/ProductController'

function App() {
    const [message, setMessage] = useState({})
    return <>
        <Header />
        <Message context={message} />
        <ProductController relayMessage={setMessage} />
    </>
}

export default App;
