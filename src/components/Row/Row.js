import React,{useState, useEffect} from 'react';
import './Row.css';
import axios from '../../requests/axios';


function Row({title, fetchUrl, isLargeRow = false}) {

    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        
        async function fetchData(){
            
            const request = await axios.get(fetchUrl);
            
            console.log("request", request);
            console.log("request.data.results", request.data.results)
            setMovies(request.data.results);
            return request;

        }
       fetchData();
       console.log("yugjhgjhg", movies);

    }, []);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => (
                    movie?.poster_path && movie?.backdrop_path ? (
                        <img className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                            key={movie?.id}
                            src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                            alt={movie?.name}
                        />
                    ) : ""
            ))}
            
            </div>
            
            
        </div>
    )
}

export default Row
