import React from 'react';
//concfig 
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
//react-router 
import { useParams } from 'react-router-dom';
//components
import Header from '../Header/Header';
import Head from './Head/Head';
import HeroImage from '../HeroImage/Hero';

//hooks 
import { useMovieFetch } from '../../Hooks/useMovieFetch';


const Movie = () => {

    const { movieId } = useParams();
    const {state: movie, loading, error} = useMovieFetch(movieId);

    console.log(movie);    

    return (

        <>
            <Header />
            <Head movieTitle={movie.title}/>
                 



            <h3> HEY movie</h3>
        </>
    )

}

export default Movie;