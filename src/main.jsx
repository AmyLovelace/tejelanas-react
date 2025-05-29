import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createTheme} from '../theme/index.js'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { ScrollProvider } from './context/ScrollContext.jsx'


const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ScrollProvider>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
      </ThemeProvider> 
  </ScrollProvider>
)
