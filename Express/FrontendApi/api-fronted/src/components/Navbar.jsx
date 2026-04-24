import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <nav className="navbar navbar-dark py-3">
            Project manager app 
            <button onClick={logout} className="btn btn-outline-light">
                Logout
            </button>
        </nav>
    )
}

export default Navbar