import {useEffect, useState} from 'react';

import API from '../API';

const useMovieFetch = (movieId) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [state, setState] = useState({});

    

}