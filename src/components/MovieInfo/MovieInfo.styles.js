import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`

    background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;

    
`; 

export const Content = styled.div`

    display: flex; 
    margin: 0px auto; 
    padding: 0px 0px; 
    max-width: var(--maxWidth);
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
      }
`;

export const Text = styled.div`

    height: auto; 
    width: 98%; 
    margin: 0px auto;
    padding: 20px 40px;
    
    h2, p, h5 {

        color: #fff;
        margin: 20px auto;
    }

    p {

        font-size: 14px;
        color: #eee;
    }

    .rating-directors {

        margin-top: 40px;
           
    }

    .rating-directors h3 {

        color: #fff;
        display: flex; 
        flex-direction: row;
    }

    .score {

        width: 35px;
        height: 35px; 
        background: #fff;
        display: flex; 
        align-items: center; 
        justify-content: center;
        color: #000; 
        border-radius: 50%;
        margin: 0;
    }
    
`;
