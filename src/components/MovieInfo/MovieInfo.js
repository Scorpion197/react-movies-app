import React from 'react';

// Components
import Thumb from '../Thumb/Thumb';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
import { Image } from '../Thumb/Thumb.styles';

const MovieInfo = ({ movie }) => {

    
    return (

        <>
            <Wrapper backdrop={movie.backdrop_path}>

                <Content>

                    <Thumb
                        image={
                            movie.poster_path
                              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                              : NoImage
                          }
                          clickable={false} 
                    />

                    <Text>
                        <h2> {movie.title}</h2>
                        <h5>PLOT </h5>
                        <p> {movie.overview}</p>

                        <div className='rating-directors'>

                            <div>
                                <h3>RATING</h3>
                                <div className='score'>{movie.vote_average}</div>
                            </div>


                        </div>
                    </Text>
                </Content>
            </Wrapper>
        </>
    )
}

export default MovieInfo;