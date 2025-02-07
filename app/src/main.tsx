import axios from 'axios'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tw-elements-react/dist/css/tw-elements-react.min.css'
import './index.css'
import App from './App.tsx'

axios.defaults.baseURL = 'http://localhost:8888'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
