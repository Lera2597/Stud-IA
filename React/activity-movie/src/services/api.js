const base_url = 'https://api.themoviedb.org/3/movie';
const image_url = 'https://image.tmdb.org/t/p';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTM3NWJiNzZkNTA3M2I5OTZlMzk4MjFiNjIzNTI5ZSIsIm5iZiI6MTc3MzA5OTk5OC4yOTksInN1YiI6IjY5YWY1YmRlMDNlNDliMTZkOTgwZjI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t_upxZZVsaxj437iEzNdRS2ltIkLSRI4BfFieaEA4x4'
    }
};

export async function getPopularMovies(){

    const response = await fetch(base_url + '/popular', options);

    const data = await response.json();
    return data.results; // del json solo sacamos el campo results el cual es un array de objetos(peliculas)
}

export async function getMovie(id){
    
}

export const getImage = (path, size = 200) =>
    {
        return `${image_url}/w${size}${path}`
    } 