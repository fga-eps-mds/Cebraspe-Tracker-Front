import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = ({userst}) => {
    let auth = {'token':userst}
    return(
        auth.token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes