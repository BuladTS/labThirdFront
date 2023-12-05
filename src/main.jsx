import React, {createContext, useContext, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./pages/Router.jsx";
import {QueryClient, QueryClientProvider} from "react-query";
import Store from "./store/store.js";

const queryClient = new QueryClient();

const store = new Store()
export const Context = createContext({
    store: store,
})


if (localStorage.getItem('token')) {
    store.checkAuth()
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Context.Provider value={{
                store,
            }}>
                <Router/>
            </Context.Provider>
        </QueryClientProvider>
    </React.StrictMode>,
)
