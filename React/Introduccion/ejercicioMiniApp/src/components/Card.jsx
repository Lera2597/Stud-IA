import './style.css'
export default function Card({nombrePelicula}){
    let path = `/portadas/${nombrePelicula}.jpg`
    return(
        <div className="card">
            <img  src={path} alt="pelicula" width="200" height="300" />
            <h2 className="card-title">{nombrePelicula}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe corrupti, excepturi similique ratione dicta cum! Accusantium, maiores et cum voluptate nostrum totam possimus? Magnam dolorum soluta ipsam ratione repellendus voluptas.</p>
        </div>
    )
}