import React from 'react';

export const Movie = ({ name, price, key }) =>
    <>
        <h3 key={key}>{name}</h3>
        <p key={key}>{price}</p>
    </>
