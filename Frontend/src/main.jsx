import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FirebaseProvider } from './Firebase/Firebase.jsx'

createRoot(document.getElementById('root')).render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>
)
