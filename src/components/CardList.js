import React from 'react';
import Card from './Card';

const CardList = ({ teams }) => {
    const cardArray = teams.map((team, i) => {
        return (
            <Card
                key={i}
                src={teams[i].src}
                name={teams[i].name}
                website={teams[i].website}
            />
        );
    })
    return ( 
    <div>
    {cardArray}
    </div>
    );
}

export default CardList;