import React from 'react';

import Header from '../Header/Header';


const Movie = ({ movieId }) => (

    <>
        <Header />
        <h3> { movieId }</h3>
    </>

)

export default Movie;