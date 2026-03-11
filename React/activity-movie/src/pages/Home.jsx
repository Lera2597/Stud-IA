import { useState , useEffect } from "react";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMivies = async () => {
            try {
                // setLoading(true);
                const data = await getPopularMovies();
                setMovies(data);
            } catch (error) {
                console.error(error);
            } 
            // finally {
            //     setLoading(false);
            // }
        };

        fetchMivies();
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
