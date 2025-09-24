import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookContext from './Context/books.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookContext.Provider value={5}>
      <App />
    </BookContext.Provider>
  </StrictMode>,
)
