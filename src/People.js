import React from 'react';

// stuff goes here

const People = (props) => {
    return (
        <div className="bg-yellow dib pa2 ma4 tj grow">
            <h2 className="f3 courier">
                {props.name}
            </h2>
            <p className="f6 system-sans-serif">
                Gender: {props.gender}<br/>
                Height: {props.height}<br/>
            </p>
        </div>
    )
}

export default People;