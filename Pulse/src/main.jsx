import ReactDOM from 'react-dom/client'
import Routes from './routes.jsx';
import UserContextProvider from './context/UserContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
        <Routes />
  </UserContextProvider>
)
