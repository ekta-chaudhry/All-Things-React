import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AtomFamilyApp from './AtomFamilyApp.jsx'

createRoot(document.getElementById('root')).render(
    <AtomFamilyApp />
)
