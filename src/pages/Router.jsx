import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./registration/Registration.jsx";
import Home from "./Home/Home.jsx";
import EditBook from "./editBook/EditBook.jsx";
import {useContext, useEffect} from "react";
import {Context} from "../main.jsx";
import PrivateRoute from "../utils/router/PrivateRoute.jsx";
import Authorization from "./authorization/Authorization.jsx";
import {observer} from "mobx-react-lite";

const Router = () => {
    const {store} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            console.log('Before check token ' + store.isAuth)
            store.checkAuth()
            console.log('After check token ' + store.isAuth)
        }
    }, []);

    return <BrowserRouter>
        <Routes>
            <Route path={'/login'} element={<Authorization/>} />
            <Route path={'/register'} element={<Registration />} />
            <Route element={<PrivateRoute/>} >
                <Route path={'/'} element={<Home/>} />
                <Route path={'/:id'}
                       element={<EditBook id />}
                />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default observer(Router)