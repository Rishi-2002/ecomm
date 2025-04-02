import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cartstate from './context/Cartstate.jsx'

createRoot(document.getElementById('root')).render(
    <Cartstate>
    <App />
    </Cartstate>
)
