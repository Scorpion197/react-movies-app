import React from 'react';

//config 
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
//hooks
import { useHomeFetch } from '../../Hooks/useHomeFetch';
//Components

import HeroImage from '../HeroImage/Hero';
import Header from '../Header/Header';
import Grid from '../Grid/Grid';
import Thumb from '../Thumb/Thumb';
import SearchBar from '../Searchbar/SearchBar';

const Home = () => {

    const {loading, error, state} = useHomeFetch();
    return (

        <>
            <Header />
            {state.results[1] ? (

                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[2].backdrop_path}`}
                    title={state.results[2].original_title}
                    text= {state.results[2].overview}
                />
            ): null}

            <SearchBar />

            <Grid header='Popular Movies'>
                {state.results.map (movie => (

                    <Thumb 
                        key={movie.id}
                        clickable 
                        image={

                            movie.poster_path ?
                                IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : ''
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
        </>
    )
}


export default Home;