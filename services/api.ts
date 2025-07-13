// onst url = 'https://api.themoviedb.org/3/keyword/%221%27/movies?include_adult=false&language=en-US&page=1';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjcwM2Y0NzQzMjM1MTMxN2ZiOTA5MDJkOTA3OTY2MSIsIm5iZiI6MTc1MjA3MjE0NC4zMjcwMDAxLCJzdWIiOiI2ODZlN2ZkMGZjN2Q4NTZiYjZhOTZiYTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bhmnH7wNO255rXVkMjBopvv0EdH_TZaMdCcd9FXofXs'
//     }
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));

export const TMDB_CONFIG = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: process.env.TMDB_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({query}: {query: String}) => {
    const endPoint = query
        ?`${TMDB_CONFIG.baseUrl}search/movie?query=${query}`
        :`${TMDB_CONFIG.baseUrl}discover/movie?sort_by=popularity.desc` ;
    const response = await fetch(endPoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })


    if (!response.ok) {
        // @ts-ignore
        throw new Error(`Something went wrong! ${response.statusText}`)
    }

    const data = await response.json()
    return data.results;
}

// @ts-ignore
export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
    try {
        const response = await fetch(`${TMDB_CONFIG.baseUrl}movie/${movieId}?api_key=${TMDB_CONFIG.apiKey}`, {
            method: 'GET',
            headers: TMDB_CONFIG.headers
        });

        if(!response.ok) {
            throw new Error(`Failed to fetch movie details ${response.statusText}`)
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        throw  error;
    }
}