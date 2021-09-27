import {useState, useEffect} from 'react';

//API 
import API from '../API';

export const useHomeFetch = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getMovies = async (page) => {

        try {

            setLoading(true); 
            setError(false);

            const movies = await API.fetchMovies("2");
            console.log(movies);

        } catch(error) {

            setError(true);
        }
    }

    useEffect(() => {

        getMovies(1);
    }, []);

    return {loading, error};
}

