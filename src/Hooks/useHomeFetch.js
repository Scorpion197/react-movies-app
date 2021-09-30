import {useState, useEffect} from 'react';

//API 
import API from '../API';

const initialState = {

    results: [], 
    total_pages: 0

};

export const useHomeFetch = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [state, setState] = useState(initialState);

    const getMovies = async (page) => {

        try {

            setLoading(true); 
            setError(false);

            const movies = await API.fetchMovies("1");
            
            setState(prev => ({
                ...movies, 
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));


        } catch(error) {

            setError(true);
        }
    }

    useEffect(() => {

        getMovies(1);
    }, []);

    return {loading, error, state};
}

