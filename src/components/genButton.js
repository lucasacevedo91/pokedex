import React from 'react';

const GenButton = (props) => {
    return (
        <span 
            className='nav-link text-light' 
            onClick={props.onClick}
            style={{cursor: 'pointer'}}
        >
            Gen {props.generation}
        </span>
    );
}
export default GenButton;
