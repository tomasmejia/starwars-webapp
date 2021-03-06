import React from 'react';
import People from './People';

// it will loop through each element and return the people component each time

const PeopleList = ({ chars }) => {
    return (
        <div>
            {
              chars.map((char, i) => {
                return (
                  <People
                    id={chars[i].id}
                    name={chars[i].name}
                    gender={chars[i].gender}
                    height={chars[i].height}
                  />
                );
              })
            }
        </div>
    );
}   

export default PeopleList;