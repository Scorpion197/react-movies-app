import React from 'react';

//Components
import { useHomeFetch } from '../../Hooks/useHomeFetch';
import HeroImage from '../HeroImage/Hero';
import Header from '../Header/Header';

const Home = () => {

    const {loading, error} = useHomeFetch();
    return (

        <>
            <Header/ >
            <h3>Welcome home</h3>
        </>
    )
}


export default Home;