import { Link } from "react-router-dom";
import { getImage } from "../services/api";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
    return (
        // <Link to={`/movie/${movie.id}`} className="movie-card">
        //     <img src={ getImage(movie.poster_path) } alt={movie.poster_path} />
        //     <h2>{movie.title}</h2>
        //     <h3>{movie.release_date}</h3>
        // </Link>

        <Link to={`/movie/${movie.id}`} className="movie-card">

            <div class="card-poster">
                <span class="year-tag">{movie.release_date}</span>
                <span class="rating-badge">{(movie.vote_average * 10).toFixed(2)}</span>
                <img src={ getImage(movie.poster_path) } alt={movie.poster_path} />
            </div>
            <div class="card-body">
                <div class="card-genres">
                    <span class="genre-tag">Sci-Fi</span>
                    <span class="genre-tag">Acción</span>
                </div>
                <h2 class="card-title">{movie.title}</h2>
                <p class="card-description">{movie.overview}</p>
                {/* <div class="card-footer">
                    <div class="card-price">$4.99 <span>/ renta</span></div>
                    <button class="btn-add">Agregar</button>
                </div> */}
            </div>
        </Link >

    );
}