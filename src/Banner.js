import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './asiox';
import requests from './Requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return <div className='banner_row' >
        <div className='banner'>
            <div className='image_wrapper'>
                <img className='hero static_image image_layer' src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} />
                <div className='trailer_vignette vignette_layer'></div>
                <div className='hero_vignette vignette_layer'></div>
            </div>
            <div className='fill_container'>
                <div className='info'>
                    <div className='logo_text'>
                        <h1 className='banner_title'>
                            {movie?.title || movie?.name || movie.original_name}
                        </h1>
                        <h1 className='synopsis'>
                            {truncate(movie?.overview, 150)}
                        </h1>
                        <div className='banner_buttons'>
                            <button className='banner_button button_left'><div class="text">Play</div></button>
                            <button className='banner_button button_right color_fade'>More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




}

export default Banner