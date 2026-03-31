import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ErrorBoundry from './ErrorBoundry.jsx'

createRoot(document.getElementById('root')).render(
 <ErrorBoundry>
<StrictMode>
    <App />
  </StrictMode>,
 </ErrorBoundry>
 
)
