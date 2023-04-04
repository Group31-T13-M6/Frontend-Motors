import { ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'
import Routes from './routes'

function App() {
  injectStyle()
  
  return (
    <div>
      <ToastContainer/>
      <Routes/>
    </div>
  )
}

export default App