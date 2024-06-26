import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider className="h-full w-full">
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
