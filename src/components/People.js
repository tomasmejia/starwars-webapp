import React from 'react';

// stuff goes here

// we're receiving props and destructuring them
// right away instead of receiving props and then
// making a constant to destructure them
const People = ({ name, gender, height }) => {
    return (
        <div className="bg-yellow dib pa2 ma4 tj grow">
            <h2 className="f3 courier">
                {name}
            </h2>
            <p className="f6 system-sans-serif">
                Gender: {gender}<br/>
                Height: {height}<br/>
            </p>
        </div>
    )
}

export default People;