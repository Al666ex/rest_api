import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore'
import DeviceStorage from './store/DeviceStore';
import App from './App';

export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ 
      user : new UserStore(),
      device : new DeviceStorage()
    }}>
      <App />
    </Context.Provider>
    
  </React.StrictMode>
);


