import React, {useState, useEffect, useRef} from 'react';

//styles
import { Wrapper, Content } from './SearchBar.styles';

//images 
import searchIcon from '../../images/search-icon.svg';

const SearchBar = ( { setSearchTerm}) => {


    return (

        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input 
                    type= 'text'
                    placeholder='Search Movie'
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;