import './style.css'
export default function Header() {
    return (
        <>
            <div className='header_container'>
                <div className="logo">
                    <img  src="/logo.png" alt="logo" width="400" height="300" />
                </div>
                <h1 className="title">PelisPlus</h1>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Generos</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}