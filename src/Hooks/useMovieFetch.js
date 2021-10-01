import {useEffect, useState} from 'react';

import API from '../API';

export const useMovieFetch = (movieId) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [state, setState] = useState({});

    const getMovie = async () => {

        try {

            setLoading(true); 
            setError(false);
            
            const movie = await API.fetchOneMovie(movieId);
            const credits = await API.fetchCredits(movieId);

            const directors = credits.crew.filter(
                member => member.job === "Director"
            )

            setState( {

                ...movie, 
                actors: credits.cast, 
                directors
            });

            setLoading(false);

        }catch(err) {

            setError(true);
        }
    }

    useEffect(() => {

        getMovie()
    }, [movieId]);

    return {state, loading, error};
}

