import React from 'react';

const Title = (props) => {
    return (
        <h1 className='mt-4'>
            {props.children}
        </h1>
    );
}
 
export default Title;