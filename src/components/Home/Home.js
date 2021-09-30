import React from 'react';

//config 
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
//Components
import { useHomeFetch } from '../../Hooks/useHomeFetch';
import HeroImage from '../HeroImage/Hero';
import Header from '../Header/Header';
import Grid from '../Grid/Grid';
import Thumb from '../Thumb/Thumb';

const Home = () => {

    const {loading, error, state} = useHomeFetch();

    return (

        <>
            <Header />
            {state.results[1] ? (

                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
                    title={state.results[1].original_title}
                    text= {state.results[1].overview}
                />
            ): null}

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