import React from 'react';
import People from './People';


const PeopleList = ({ chars }) => {
    return (
        <div>
            <People name={chars[0].name} gender={chars[0].gender} height={chars[0].height} />
            <People name={chars[1].name} gender={chars[1].gender} height={chars[1].height} />
            <People name={chars[2].name} gender={chars[2].gender} height={chars[2].height} />
            <People name={chars[3].name} gender={chars[3].gender} height={chars[3].height} />
        </div>
    )
}

export default PeopleList;