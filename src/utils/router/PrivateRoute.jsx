import {useContext} from "react";
import {Context} from "../../main.jsx";
import {Navigate, Outlet} from "react-router-dom";
import {observer} from "mobx-react-lite";

const PrivateRoute = () => {
    const {store} = useContext(Context)
    console.log('Check for private route ' + store.isAuth)
    return (
        store.isAuth ? <Outlet/> : <Navigate to="login"/>
    )
}

export default observer(PrivateRoute)