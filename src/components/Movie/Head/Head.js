import React from 'react';

import {Wrapper, Content} from './Head.styles';

import { Link } from 'react-router-dom';

const Head = ({movieTitle}) => {

    return (

        <>
            <Wrapper>
                <Content>
                    <Link to="/">
                        <p className="home"> Home </p>
                    </Link>
                    <p>  | {movieTitle} </p>
                </Content>
            </Wrapper>
        </>
    )

}

export default Head;