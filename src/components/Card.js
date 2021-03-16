import React from 'react';

function Card({src,name,website}) {
    return (
        <div className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='teams' src={src} height='400px' width='380px' />
            <div>
                <h2>{name}</h2>
                <p>{website}</p>
            </div>
        </div>  
    )
}


export default Card; 