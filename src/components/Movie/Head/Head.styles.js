import styled from 'styled-components';

export const Wrapper = styled.div`

    background: var(--medGrey);
    padding: 0px 20px;
    height: auto;
`; 

export const Content = styled.div`

    display: flex; 
    align-items: center;
    flex-direction: row;
    max-width: var(--maxWidth);
    padding: 20px 0px; 
    margin: 0 auto;

    .home {

        color: red;
        cursor: pointer;
    }
`;

