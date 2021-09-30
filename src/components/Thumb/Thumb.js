import React from 'react';

// stlyes 
import {Image} from './Thumb.styles';

// react router 
import { Link } from 'react-router-dom';

const Thumb = ({ image, movieId, clickable}) => (

    <div> 
        { clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt ='movie' />
            </Link>
        ): (

            <Image src={image} alt ='movie' />
        )}
        
    </div>

);

export default Thumb;