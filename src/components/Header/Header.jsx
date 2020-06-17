import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import './Header.css';

function Header(){
    return(
        <Jumbotron className='bg-info'>
            <h1 className='text-bold'>Employee Directory</h1>
             <p>Sort list by column button or filter names by charater</p>
        </Jumbotron>

    )
}

export default Header;