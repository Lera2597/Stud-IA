import { Navigate  } from "react-router-dom";
const PrivateRoute = ({children}) => { // uso del prop children para acceder a los componentes hijos que se encuentran dentro de la función
    const token = localStorage.getItem('token')
    return token ? children : <Navigate to={'/login'}/>;
}
export default PrivateRoute