import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App'
//import StaticProfile from './components/StaticProfileCard'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
    )
