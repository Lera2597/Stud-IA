import { useNavigate } from "react-router-dom";
import {AuthContext} from '../context/AuthContext.jsx'
import { useContext } from "react";


const Navbar = () => {

    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    // const logout = () => {
    //     localStorage.removeItem('token');
    //     navigate('/');
    // }
    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <nav className="navbar navbar-dark py-3">
            <span className="navbar-brand">Project Management System Frontend-API</span>

            <span className="text-light">
                {user?.email} (Rol: {user?.role})
            </span>
            <button onClick={handleLogout} className="btn btn-outline-light">
                Logout
            </button>
        </nav>
    )
}

export default Navbar