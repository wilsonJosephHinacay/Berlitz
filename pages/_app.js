import React from 'react'
import { ToastProvider } from 'react-toast-notifications'
import 'antd/dist/antd.css';


const App = ({ Component, pageProps }) => {
    return <ToastProvider><Component {...pageProps} /></ToastProvider>
};

export default App;